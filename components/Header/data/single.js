// const single = ['home', 'routes', 'services', 'store'];
// const single = ['about', 'services', 'our-expertise', 'case-studies'];

const single = async () => {
    await api.get(`${resources.menu}`)
}

export default single;
