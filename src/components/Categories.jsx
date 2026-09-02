const Category = ({name, description}) => {
    return (
        <div className="bg-green-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-green-900 dark:text-white">
            <h2 className="text-xl font-extrabold">{name}</h2>
            <p className="text-green-700 dark:text-green-300">{description}</p>
        </div>
    );
};


export default Category;