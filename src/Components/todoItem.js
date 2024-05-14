import '../App.css';
import {useState} from "react";

export default function TodoItem( props ) {

    const [change,setChange] = useState(false);

    const [name,setName] = useState(props.item.name);
    const [desc,setDesc] = useState(props.item.desc);
    const complete = props.item.complete;

    function completeToDoFunction () {
        props.changeFunc(props.item.id,name,desc,!complete)
    }

    function changeToDoFunction () {
        props.changeFunc(props.item.id,name,desc,complete)
        setChange(false)
    }

    return(
        <div className={'taskList'}>
            <p>{`№ ${props.index+1} `}</p>
            { change ? (
                <div className={'taskInfo'}>
                    <input value={name}
                           onChange={(event) => (setName(event.target.value))}
                           placeholder={props.item.name}
                    />
                    <input value={desc}
                           onChange={(event) => (setDesc(event.target.value))}
                           placeholder={props.item.desc}
                    />
                </div>
            ) : (
                <div className={'taskInfo'}>
                    <p>{props.item.name}</p>
                    <p>{props.item.desc}</p>
                </div>
            )}
            {change ? (
                <div className={'buttonSection'}>
                    <button onClick={ () => (changeToDoFunction())}>Change</button>
                </div>
            ) : (
                <div className={'buttonSection'}>
                    <button onClick={ () => (completeToDoFunction())}>Complete</button>
                    <button onClick={ () => (setChange(true))}>Change</button>
                    <button onClick={ () => (props.deleteFunc(props.item.id))}>Delete</button>
                </div>
            )}
        </div>
    );
}