const Category = ({name, description}) => {
    return (
        <div className="bg-green-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-extrabold">{name}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};


export default Category;