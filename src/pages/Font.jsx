import CardHeader from '../components/CardHeader';
import FontTable from '../components/FontTable';

const FontPage = () => {
    return (
        <div className="container mx-auto p-6">
            <CardHeader title="Our Fonts" subTitle="Browse a list of Zepto fonts to build your font group." />
            <FontTable />
        </div>
    );
};

export default FontPage;
