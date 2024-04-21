import React, { useEffect, useState } from 'react'
import Tabs from '../common/Tabs';
import Divider from '../common/Divider';
import Markdown from 'react-markdown';
import november from 'bundle-text:./November2023.txt';
import december from 'bundle-text:./December2023.txt';
import january from 'bundle-text:./January2024.txt';
import february from 'bundle-text:./February2024.txt';
import march from 'bundle-text:./March2024.txt';
import './Blog.css';

const blogEntryList = [
    february,
    january,
    december,
    november,
    march
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
            appBarClass='Blog-Appbar Appbar-Common'
            appContentClass='BlogContent'
            dropdownClass='Blog-Dropdown Dropdown-Common'
        >
        <h1>Blog</h1>
        <Divider/>
        <div>
            {entries.map((entry, index) => <Markdown key={'blogItem'+index}>{entry}</Markdown>)}
        </div>
    </Tabs>
</div>;
}