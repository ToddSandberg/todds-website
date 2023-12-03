import React, { useEffect, useState } from 'react'
import Tabs from '../common/Tabs';
import Divider from '../common/Divider';
import Markdown from 'react-markdown';
import raw from './November2023.txt';

export default function Blog() {
    const [ entries, setEntries ] = useState<string[]>([]);

    useEffect(() => {
        fetch(raw)
            .then((r) => r.text())
            .then((text: string) => {
                console.log(text);
                setEntries([ text ]);
            }) 
    }, []);

    return <div className="Blog">
        <Tabs>
        <h1>Blog</h1>
        <Divider/>
        <div>
            {entries.map((entry) => <Markdown>{entry}</Markdown>)}
        </div>
    </Tabs>
</div>;
}