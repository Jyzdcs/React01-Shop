
function Title( props ) {

    return (
        <div class="bg-yellow-b">
            <div>
                <h1 class={props.classH1}> { props.title } </h1>
            </div>
        </div>
    )
}

export default Title