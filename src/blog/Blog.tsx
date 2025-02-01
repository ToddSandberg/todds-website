import Tabs from '../common/Tabs';
import Divider from '../common/Divider';
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

const blogEntryList = [
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

export default function Blog() {
    /*const [ entries, setEntries ] = useState<string[]>([]);

    const resolveEntries = async () => {
        const resolveEntries: string[] = [];

        // TODO eventually want to store these entries in the cloud
        const client = generateClient();
        const result = await client.graphql({
            query: listBlogEntries,
            variables: {}
        });

        console.log(result);
        result.data.listBlogEntries.items.forEach((entry) => {
            // TODO ideally wouldnt need to replace this
            resolveEntries.push(entry.data ?  entry.data.replaceAll('\\n', '\n') : '');
        });

        for (const indexIGuess in blogEntryList) {
            const newEntry = blogEntryList[indexIGuess];
            await fetch(newEntry)
                .then((r) => r.text())
                .then((text: string) => {
                    console.log(text);
                    resolveEntries.push(text);
                });
        }

        setEntries(blogEntryList);
    };

    useEffect(() => {
        resolveEntries();
    }, []);

    if (entries.length === 0) {
        return 'loading';
    }*/

    return <div className="Blog">
        <Tabs
            appBarClass='Blog-Appbar Appbar-Common'
            appContentClass='BlogContent'
            dropdownClass='Blog-Dropdown Dropdown-Common'
            fontClass='blog-font'
        >
            <h1>Blog</h1>
            <Divider/>
            <div>
                {blogEntryList.map((entry, index) => <Markdown key={`blogItem${// biome-ignore lint/suspicious/noArrayIndexKey: index is id here
                    index}`}>
                    {entry}
                </Markdown>)}
            </div>
        </Tabs>
    </div>;
}