'use client';

import { Accordion } from 'flowbite-react';

export default function DefaultAccordion({ tips }) {
    return (
        <Accordion>
            {tips.map((tip) => (
                <Accordion.Panel>
                    <Accordion.Title className="text-xl color-gray-600">
                        {tip.title}
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            {tip.content}
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            ))}
        </Accordion>
    );
}
