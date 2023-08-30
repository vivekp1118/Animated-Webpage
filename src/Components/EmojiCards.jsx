function EmojiCard(props) {
    return ( 
        <div className={`p-8 w-80 h-60 rounded-2xl flex flex-col text-left gap-4 flex-shrink-0 m-5`} style={{ background: props.color}}>
            <div className="text-4xl">{props.emoji}</div>
            {!props.isDark ? 
                <>
            <div className="ml-1 text-base font-semibold ">{props.header}</div>
            <div className="ml-1 text-sm font-medium text-gray-600 -tracking-wider leading-[1.6]">{props.text}</div>
                </>
            
            :
            <>
            <div className="ml-1 text-base font-semibold text-white">{props.header}</div>
            <div className="ml-1 text-sm font-medium text-gray-200 -tracking-wider leading-[1.6]">{props.text}</div>
            </>
            }
        </div>
     );
}
EmojiCard.defaultProps = {
    isDark: false
}
export default EmojiCard;