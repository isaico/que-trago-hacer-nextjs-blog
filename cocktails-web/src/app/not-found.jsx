'use client';
import Link from 'next/link';
const notFound = () => {
    return (
        <div>
            <h2 className="text-2xl py-8 flex items-center" >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className='m-2 fill-red'
                >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
                Error: <span className="font-semibold">404</span>
            </h2>
            <h3 className="italic text-2xl">ruta no encontrada</h3>
            <Link href="/" className='flex items-center p-2 mt-8 border-2 border-gray-900 justify-center '>
                Ir a inicio
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  className='ml-2'
                >
                    <path d="M12.71 2.29a1 1 0 00-1.42 0l-9 9a1 1 0 000 1.42A1 1 0 003 13h1v7a2 2 0 002 2h12a2 2 0 002-2v-7h1a1 1 0 001-1 1 1 0 00-.29-.71zM6 20v-9.59l6-6 6 6V20z" />
                </svg>
            </Link>
        </div>
    );
};

export default notFound;
