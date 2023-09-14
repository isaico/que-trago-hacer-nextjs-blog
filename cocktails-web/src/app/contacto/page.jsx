'use client';
import { useState, useRef } from 'react';
import { Button } from 'flowbite-react';
import DefaultToast from '@/components/UiComps/Toast';
const contact = async () => {
    const [showToast, setShowToast] = useState({
        ok: false,
        alert: 'empty',
        status: 0,
    });
    const [loading, setLoading] = useState(false);
    const input = useRef();

    // const resend = new Resend(process.env.RESEND_API_KEY);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        const data = JSON.stringify({
            email: formData.get('email'),
            name: formData.get('name'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        });
        try {
            const resp = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: data,
            });
            console.log(resp);
            if (resp.status == 200) {
                setShowToast({
                    ok: true,
                    alert: 'Mensaje enviado',
                    status: 200,
                });
                setLoading(false);
            } else {
                setShowToast({
                    ok: true,
                    alert: 'Error al enviar, intente nuevamente!',
                    status: 500,
                });
                setLoading(false);
            }
            // console.log(resp);
        } catch (error) {
            throw new Error(error);
        }
        input.current.value = '';
    };

    return (
        <div className=" ">
            <div className="flex">
                <form onSubmit={handleSubmit}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            ref={input}
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email
                        </label>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                ref={input}
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Nombre
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="subject"
                                id="asunto"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                ref={input}
                            />
                            <label
                                htmlFor="floating_last_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Asunto
                            </label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="textarea"
                                name="message"
                                id="message"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                ref={input}
                            />
                            <label
                                htmlFor="floating_phone"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Mensaje
                            </label>
                        </div>
                       
                    </div>
                    {loading ? (
                        <Button
                            isProcessing
                            gradientDuoTone="purpleToPink"
                            size="xs"
                            type="submit"
                        >
                            <p>Enviar!</p>
                        </Button>
                    ) : (
                        <Button gradientDuoTone="purpleToPink" size="xs" type="submit">
                            <p>Enviar!</p>
                        </Button>
                    )}
                </form>
            </div>
            {showToast.ok ? (
                <DefaultToast
                    alert={showToast.alert}
                    status={showToast.status}
                ></DefaultToast>
            ) : null}
        </div>
    );
};

export default contact;
