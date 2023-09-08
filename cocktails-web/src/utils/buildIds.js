export function buildIds({ blog }) {
   let ids = []
    if (blog.title) {
        ids.push({
            id: 'title',
            text: 'Ir al principio',
        });
    }
    if (blog.description) {
        ids.push({
            id: 'description',
            text: 'Descripción del blog',
        });
    }
  
    if (blog.tips) {
        ids.push({
            id: 'tips',
            text: 'Recomendaciones',
        });
    }

    ids.push({
        id: 'recommended',
        text: 'Artículos relacionados',
    });
    return ids
}
