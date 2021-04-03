import style from './codeBlock.module.scss'

export default function CodeBlock({ text }) {
    return (
        <pre className={style.codeBlock}>
            {text}
        </pre>
    )
}