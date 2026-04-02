export function MovieCard ({image, rating})
{
    return (
        <div>
            <div> IMDB rating: {rating}</div>
            <img src="{image}" alt="" />
        </div>
    )
}