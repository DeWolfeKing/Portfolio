import '../App.css';

export default function TodoItem() {
    return(
        <div className={'taskList'}>
            <p>#1</p>
            <div className={'taskInfo'}>
                <p>Task Name</p>
                <p>Task Description</p>
            </div>
            <div className={'buttonSection'}>
                <button>Complete</button>
                <button>Delete</button>
            </div>
        </div>
    );
}