import React, { useEffect, useState } from 'react'
import Tabs from '../common/Tabs';
import Divider from '../common/Divider';
import Markdown from 'react-markdown';
import november from './November2023.txt';
import december from './December2023.txt';
import january from './January2024.txt';
import './Blog.css';

const blogEntryList = [
    january,
    december,
    november
]

export default function Blog() {
    const [ entries, setEntries ] = useState<string[]>([]);

    const resolveEntries = async () => {
        const resolveEntries: string[] = [];

        for (const indexIGuess in blogEntryList) {
            const newEntry = blogEntryList[indexIGuess];
            await fetch(newEntry)
                .then((r) => r.text())
                .then((text: string) => {
                    console.log(text);
                    resolveEntries.push(text);
                })
        }

        setEntries(resolveEntries);
    };

    useEffect(() => {
        resolveEntries();
    }, []);

    if (entries.length === 0) {
        return 'loading';
    }

    return <div className="Blog">
        <Tabs
            appBarClass='Blog-Appbar'
            appContentClass='BlogContent'
            dropdownClass='Blog-Dropdown'
        >
        <h1>Blog</h1>
        <Divider/>
        <div>
            {entries.map((entry, index) => <Markdown key={'blogItem'+index}>{entry}</Markdown>)}
        </div>
    </Tabs>
</div>;
}