import Tabs from '../common/Tabs';
import Divider from '../common/Divider';
import { usePageTitle } from '../common/usePageTitle';
import Markdown from 'react-markdown';
import './Blog.css';
import { december } from './December2023';
import { march } from './March2024';
import { february } from './February2024';
import { january } from './January2024';
import { november } from './November2023';
import { april2024 } from './April2024';
import { may2024 } from './May2024';
import { june2024 } from './June2024';
import { august2024 } from './August2024';
import { september2024 } from './September2024';
import { october2024 } from './October2024';
import { november2024 } from './November2024';
import { december2024 } from './December2024';
import { january2025 } from './January2025';
import { february2025 } from './February2025';
import { march2025 } from './March2025';
import { april2025 } from './April2025';
import { may2025 } from './May2025';
import { june2025 } from './June2025';

const blogEntryList = [
    june2025,
    may2025,
    april2025,
    march2025,
    february2025,
    january2025,
    december2024,
    november2024,
    october2024,
    september2024,
    august2024,
    june2024,
    may2024,
    april2024,
    march,
    february,
    january,
    december,
    november
];

function getYear(entry: string): string {
    const match = entry.match(/^# \w+ (\d{4})/m);
    return match ? match[1] : 'Unknown';
}

export default function Blog() {
    usePageTitle('Blog');

    const indexedEntries = blogEntryList.map((entry, idx) => ({ entry, year: getYear(entry), idx }));
    const years = [...new Set(indexedEntries.map(e => e.year))];
    const byYear: Record<string, typeof indexedEntries> = {};
    for (const e of indexedEntries) {
        if (!byYear[e.year]) byYear[e.year] = [];
        byYear[e.year].push(e);
    }

    return <div className="Blog">
        <Tabs
            appBarClass='Blog-Appbar Appbar-Common'
            appContentClass='BlogContent'
            dropdownClass='Blog-Dropdown Dropdown-Common'
            fontClass='blog-font'
        >
            <h1 className="blog-page-title">Blog</h1>
            <Divider/>
            <div className="blog-entries">
                {years.map(year => (
                    <div key={year}>
                        <div className="blog-year-header">{year}</div>
                        {byYear[year].map(({ entry, idx }) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: index is id here
                            <div key={idx} className="blog-entry-card">
                                <Markdown>{entry}</Markdown>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </Tabs>
    </div>;
}