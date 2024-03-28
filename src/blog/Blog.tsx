import React, { useEffect, useState } from 'react'
import Tabs from '../common/Tabs';
import Divider from '../common/Divider';
import Markdown from 'react-markdown';
import november from './November2023.txt';
import december from './December2023.txt';
import january from './January2024.txt';
import february from './February2024.txt';
import './Blog.css';

const blogEntryList = [
    february,
    january,
    december,
    november
]

export default function Blog() {
    const [ entries, setEntries ] = useState<string[]>([]);

    const resolveEntries = async () => {
        const resolveEntries: string[] = [];

        // TODO eventually want to store these entries in the cloud
        /*const client = generateClient();
        const result = await client.graphql({
            query: listBlogEntries,
            variables: {}
        });

        console.log(result);
        result.data.listBlogEntries.items.forEach((entry) => {
            // TODO ideally wouldnt need to replace this
            resolveEntries.push(entry.data ?  entry.data.replaceAll('\\n', '\n') : '');
        });*/

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