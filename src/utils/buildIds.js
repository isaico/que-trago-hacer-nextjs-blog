export function buildIds({ blog }) {
    let ids = [];
    if (blog.title && blog.title !== undefined) {
        ids.push({
            id: 'title',
            text: 'Encabezado',
        });
    }
    if (blog.description && blog.description !== undefined) {
        ids.push({
            id: 'description',
            text: 'Descripción del post',
        });
    }

    if (blog.conclusion && blog.conclusion !== undefined) {
        ids.push({
            id: 'conclusion',
            text: 'Fin del post',
        });
    }

    ids.push({
        id: 'recommended',
        text: 'Publicaciones relacionadas',
    });
    return ids;
}
