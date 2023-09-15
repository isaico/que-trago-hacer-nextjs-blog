'use client';

import { Toast } from 'flowbite-react';
import { FaTelegramPlane } from 'react-icons/fa';
import { BiMessageAltError } from 'react-icons/bi';

export default function DefaultToast({ alert, status }) {

    return (
        <div className="space-x-4 divide-x divide-gray-200 dark:divide-gray-700">
            {status == 200 ? (
                <Toast>
                    <FaTelegramPlane className="h-5 w-5 text-green-500" />
                    <div className="pl-4 text-sm font-normal">{alert}</div>
                    <Toast.Toggle />
                </Toast>
            ) : (
                <Toast>
                    <BiMessageAltError className="h-5 w-5 text-red-500" />
                    <div className="pl-4 text-sm font-normal">{alert}</div>
                    <Toast.Toggle />
                </Toast>
            )}
        </div>
    );
}
