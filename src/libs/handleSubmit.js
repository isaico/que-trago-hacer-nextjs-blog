

export const handleSubmit = async (event,setLoading,setShowToast) => {
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
        if (resp.status == 200) {
            setShowToast({
                ok: true,
                alert: 'Mensaje enviado correctamente!',
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
    } catch (error) {
        throw new Error(error);
    }
    document.getElementById('form').reset();
};