'use client';
import { useState } from 'react';
import { Button } from 'flowbite-react';
import DefaultToast from '@/components/UiComps/Toast';
import { handleSubmit } from '@/utils/handleSubmit';
import SocialIcons from '@/components/UiComps/SocialIcons';
const contact = () => {
    const [showToast, setShowToast] = useState({
        ok: false,
        alert: 'empty',
        status: 0,
    });
    const [loading, setLoading] = useState(false);

    return (
        <div className=" w-full">
            <div className="grid sm:grid-cols-2 w-full h-[calc(100vh-61px)] ">
                <div className="flex flex-col justify-center items-center text-center px-20 justify-self-center relative ">
                    <div className="flex flex-col text-center items-center justify-center ">
                        <h1 className="text-6xl text-center p-4 mb-2  font-semibold text-grad-2 flex items-center gap-2">
                            Hablemos!
                            <span className="text-white text-4xl ">🥂🎉</span>
                        </h1>
                        <p className="text-md font-medium text-gray-600 mb-6 ">
                            Si te gusto el sitio y quieres que haga uno para ti,
                            escríbeme!, o si tienes alguna duda, pregunta o
                            propuesta, no pierdas el tiempo y contáctame con un
                            solo clic!
                        </p>
                    </div>
                    <form
                        onSubmit={(event) =>
                            handleSubmit(event, setLoading, setShowToast)
                        }
                        id="form"
                        className="w-full"
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
                                <Button
                                    isProcessing
                                    gradientDuoTone="purpleToPink"
                                    pill
                                    type="submit"
                                >
                                    <span className="px-8">Enviar!</span>
                                </Button>
                            ) : (
                                <Button
                                    gradientDuoTone="purpleToPink"
                                    pill
                                    type="submit"
                                >
                                    <span className="px-8">Enviar!</span>
                                </Button>
                            )}

                            {showToast.ok ? (
                                <DefaultToast
                                    alert={showToast.alert}
                                    status={showToast.status}
                                ></DefaultToast>
                            ) : null}
                        </div>
                    </form>
                    <div className="absolute bottom-2 right-2 "> 
                        <SocialIcons />
                    </div>
                </div>
                <div className="bg-[url(https://res.cloudinary.com/dzyllqqxi/image/upload/v1694714639/mejores-amigos-brindando-juntos-ilustrados_23-2148394377_cbsd5t.jpg)] w-full bg-cover bg-center"></div>
            </div>
        </div>
    );
};

export default contact;
