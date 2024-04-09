'use client';
import { useState } from 'react';
import  handleSubmit  from '@/libs/handleSubmit';
import dynamic from 'next/dynamic';
const DefaultToast = dynamic(() => import('@/components/UiComps/Toast'));

const ContactForm = () => {
    const [showToast, setShowToast] = useState({
        ok: false,
        alert: 'empty',
        status: 0,
    });
    const [loading, setLoading] = useState(false);

    return (
        <form
            onSubmit={(event) => handleSubmit(event, setLoading, setShowToast)}
            id="form"
            className="px-12 w-full "
        >
            <div className="relative z-0 w-full mb-6 group">
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                    Nombre
                </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer "
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-125 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                        Email
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="subject"
                        id="asunto"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_last_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                        Asunto
                    </label>
                </div>
            </div>

            <div className="relative z-0 w-full mb-6 mt-4 group">
                <textarea
                    type="textarea"
                    name="message"
                    id="message"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_phone"
                    rows="6"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                    Mensaje
                </label>
            </div>

            <div className=" w-full flex items-center justify-between ">
                {loading ? (
                    <button className="px-12 bg-grad-main rounded-full py-2 text-white font-medium">
                        Enviando...
                    </button>
                ) : (
                    <button className="px-12 bg-grad-main rounded-full py-2 text-white font-medium hover:to-purple-400">
                        Enviar!
                    </button>
                )}

                {showToast.ok ? (
                    <DefaultToast
                        alert={showToast.alert}
                        status={showToast.status}
                    ></DefaultToast>
                ) : null}
            </div>
        </form>
    );
};

export default ContactForm;
