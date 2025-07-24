import './styles.scss';

type RecipeCardProps = {
    id: string;
    title: string;
    image: string;
}

function RecipeCard({ id, title, image }: RecipeCardProps) {
    return (
        <div className="recipe-card">
            <img src={image} alt={title} className="recipe-image" />
            <h3 className="recipe-title">{title}</h3>
            <a href={`/recipe/${id}`} className="recipe-link">Scopri di più</a>
        </div>
    );
}

export default RecipeCard;