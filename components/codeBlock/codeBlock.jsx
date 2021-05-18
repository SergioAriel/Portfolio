import style from './codeBlock.module.scss'

export default function CodeBlock({ text, handleCode, id, codeBlockShow }) {
    return (
        <div className={codeBlockShow ? style.codeBlockmodal : style.codeBlockNone} onClick={()=> handleCode(id)}>
            <pre className={style.codeBlock}>
                {text}
            </pre>
        </div>
    )
}