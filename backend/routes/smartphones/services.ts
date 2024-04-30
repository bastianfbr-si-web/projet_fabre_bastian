import smartphones from '../../mocks/smartphones.json';

function getAll(priceMin: string, priceMax: string, name: string, brand: string) {
    return smartphones.filter(smartphone => {
        if (priceMin && smartphone.prix < parseInt(priceMin)) {
            return false;
        }
        if (priceMax && smartphone.prix > parseInt(priceMax)) {
            return false;
        }
        if (name && !smartphone.nom.toLowerCase().includes(name.toLowerCase())) {
            return false;
        }
        if (brand && !smartphone.marque.toLowerCase().includes(brand.toLowerCase())) {
            return false;
        }
        return true;
    });
}

export default { getAll };