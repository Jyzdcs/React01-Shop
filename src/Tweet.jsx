export function Tweet({ name, content, like }) {
    const onLike = (like) => {
        like++;
        console.log(like)
        return like
    };

    return (
    <div className="tweet">
        <h3>{name}</h3>
        <p>{content}</p>
        <button onClick={() => onLike(like)}>{like} likes</button>
    </div>
    )
}