// for btn-1
document.getElementById("completed-one")
    .addEventListener("click", function () {
        alert('Board updated successfully!')
        // assign-decrement
        const assignDecrement = document.getElementById('assign-decrement').innerText;
        const convertedDecrement = Number(assignDecrement) - 1;

        // completed-increment
        const completedIncrement = document.getElementById('completed-increment').innerText;
        const convertedIncrement = Number(completedIncrement) + 1;
    





        if (convertedDecrement >= 0 && convertedIncrement <= 29) {
            document.getElementById('assign-decrement').innerText = convertedDecrement;
            document.getElementById('completed-increment').innerText = convertedIncrement;
            document.getElementById("completed-one").disabled = true;
            const historyContainer = document.getElementById("history-container");
            const paragraphOne = document.getElementById("paragraph-one");
            const p = document.createElement("p");
            if (convertedIncrement === 29) {
                alert('Congrats!!! You have completed all the current tasks')
            }



            // time 
            const today = new Date();
            const f = new Intl.DateTimeFormat("en-US", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true, // Use 12-hour format
                
            });
            const currentTime = f.format(today);   
            p.innerText = `
            You have completed The Task ${paragraphOne.innerText} at ${currentTime}.
        `
            historyContainer.appendChild(p);



        }
        else {
            document.getElementById('assign-decrement').innerText = 0;
            document.getElementById('completed-increment').innerText = convertedIncrement;
            document.getElementById("completed-one").disabled = true;
            

        }









    })

// for btn-2
document.getElementById("completed-two")
    .addEventListener("click", function () {
        alert('Board updated successfully!')
        // assign-decrement
        const assignDecrement = document.getElementById('assign-decrement').innerText;
        const convertedDecrement = Number(assignDecrement) - 1;

        // completed-increment
        const completedIncrement = document.getElementById('completed-increment').innerText;
        const convertedIncrement = Number(completedIncrement) + 1;



        if (convertedDecrement >= 0 && convertedIncrement <= 29) {
            document.getElementById('assign-decrement').innerText = convertedDecrement;
            document.getElementById('completed-increment').innerText = convertedIncrement;
            document.getElementById("completed-two").disabled = true;
            const historyContainer = document.getElementById("history-container");
            const paragraphTwo = document.getElementById("paragraph-two");
            const p = document.createElement("p");
            if (convertedIncrement === 29) {
                alert('Congrats!!! You have completed all the current tasks')
            }


            // time 
            const today = new Date();
            const f = new Intl.DateTimeFormat("en-US", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true, // Use 12-hour format
                
            });
            const currentTime = f.format(today);               


            
            p.innerText = `
                You have completed The Task ${paragraphTwo.innerText} at ${currentTime}.
            `
            historyContainer.appendChild(p);
            console.log(paragraphTwo.innerText)

        }
        else {
            document.getElementById('assign-decrement').innerText = 0;
            document.getElementById('completed-increment').innerText = convertedIncrement;
            document.getElementById("completed-two").disabled = true;
            
        }
    })

// for btn-3
document.getElementById("completed-three")
    .addEventListener("click", function () {
        alert('Board updated successfully!')
        // assign-decrement
        const assignDecrement = document.getElementById('assign-decrement').innerText;
        const convertedDecrement = Number(assignDecrement) - 1;

        // completed-increment
        const completedIncrement = document.getElementById('completed-increment').innerText;
        const convertedIncrement = Number(completedIncrement) + 1;



        if (convertedDecrement >= 0 && convertedIncrement <= 29) {
            document.getElementById('assign-decrement').innerText = convertedDecrement;
            document.getElementById('completed-increment').innerText = convertedIncrement;
            document.getElementById("completed-three").disabled = true;
            const historyContainer = document.getElementById("history-container");
            const paragraphThree = document.getElementById("paragraph-three");
            const p = document.createElement("p");
            if (convertedIncrement === 29) {
                alert('Congrats!!! You have completed all the current tasks')
            }

            // time 
            const today = new Date();
            const f = new Intl.DateTimeFormat("en-US", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true, // Use 12-hour format
                
            });
            const currentTime = f.format(today);   

            p.innerText = `
                You have completed The Task ${paragraphThree.innerText} at ${currentTime}.
            `
            historyContainer.appendChild(p);
            console.log(paragraphThree.innerText)

        }


        else {
            document.getElementById('assign-decrement').innerText = 0;
            document.getElementById('completed-increment').innerText = convertedIncrement;
            document.getElementById("completed-three").disabled = true;
            
        }
    })

// for btn-4
document.getElementById("completed-four")
    .addEventListener("click", function () {
        alert('Board updated successfully!')
        // assign-decrement
        const assignDecrement = document.getElementById('assign-decrement').innerText;
        const convertedDecrement = Number(assignDecrement) - 1;

        // completed-increment
        const completedIncrement = document.getElementById('completed-increment').innerText;
        const convertedIncrement = Number(completedIncrement) + 1;



        if (convertedDecrement >= 0 && convertedIncrement <= 29) {
            document.getElementById('assign-decrement').innerText = convertedDecrement;
            document.getElementById('completed-increment').innerText = convertedIncrement;
            document.getElementById("completed-four").disabled = true;
            const historyContainer = document.getElementById("history-container");
            const paragraphFour = document.getElementById("paragraph-four");
            const p = document.createElement("p");
            if (convertedIncrement === 29) {
                alert('Congrats!!! You have completed all the current tasks')
            }

            // time 
            const today = new Date();
            const f = new Intl.DateTimeFormat("en-US", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true, // Use 12-hour format
                
            });
            const currentTime = f.format(today);   

            p.innerText = `
                You have completed The Task ${paragraphFour.innerText} at ${currentTime}.
            `
            historyContainer.appendChild(p);
            console.log(paragraphFour.innerText)

        }
        else {
            document.getElementById('assign-decrement').innerText = 0;
            document.getElementById('completed-increment').innerText = convertedIncrement;
            document.getElementById("completed-four").disabled = true;
            
        }
    })

// for btn-5
document.getElementById("completed-five")
    .addEventListener("click", function () {
        alert('Board updated successfully!')
        // assign-decrement
        const assignDecrement = document.getElementById('assign-decrement').innerText;
        const convertedDecrement = Number(assignDecrement) - 1;

        // completed-increment
        const completedIncrement = document.getElementById('completed-increment').innerText;
        const convertedIncrement = Number(completedIncrement) + 1;



        if (convertedDecrement >= 0 && convertedIncrement <= 29) {
            document.getElementById('assign-decrement').innerText = convertedDecrement;
            document.getElementById('completed-increment').innerText = convertedIncrement;
            document.getElementById("completed-five").disabled = true;
            const historyContainer = document.getElementById("history-container");
            const paragraphFive = document.getElementById("paragraph-five");
            const p = document.createElement("p");
            if (convertedIncrement === 29) {
                alert('Congrats!!! You have completed all the current tasks')
            }

            // time 
            const today = new Date();
            const f = new Intl.DateTimeFormat("en-US", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true, // Use 12-hour format
                
            });
            const currentTime = f.format(today);   

            p.innerText = `
                You have completed The Task ${paragraphFive.innerText} at ${currentTime}.
            `
            historyContainer.appendChild(p);
            console.log(paragraphFive.innerText)

        }
        else {
            document.getElementById('assign-decrement').innerText = 0;
            document.getElementById('completed-increment').innerText = convertedIncrement;
            document.getElementById("completed-five").disabled = true;
            

        }
    })

// for btn-6
document.getElementById("completed-six")
    .addEventListener("click", function () {
        alert('Board updated successfully!')
        // assign-decrement
        const assignDecrement = document.getElementById('assign-decrement').innerText;
        const convertedDecrement = Number(assignDecrement) - 1;

        // completed-increment
        const completedIncrement = document.getElementById('completed-increment').innerText;
        const convertedIncrement = Number(completedIncrement) + 1;



        if (convertedDecrement >= 0 && convertedIncrement <= 29) {
            document.getElementById('assign-decrement').innerText = convertedDecrement;
            document.getElementById('completed-increment').innerText = convertedIncrement;
            document.getElementById("completed-six").disabled = true;
            const historyContainer = document.getElementById("history-container");
            const paragraphSix = document.getElementById("paragraph-six");
            const p = document.createElement("p");
            if (convertedIncrement === 29) {
                alert('Congrats!!! You have completed all the current tasks')
            }

            // time 
            const today = new Date();
            const f = new Intl.DateTimeFormat("en-US", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true, // Use 12-hour format
                
            });
            const currentTime = f.format(today);               


            p.innerText = `
                You have completed The Task ${paragraphSix.innerText} at ${currentTime}.
            `
            historyContainer.appendChild(p);
            console.log(paragraphSix.innerText)

        }
        else {
            document.getElementById('assign-decrement').innerText = 0;
            document.getElementById('completed-increment').innerText = convertedIncrement;
            document.getElementById("completed-six").disabled = true;
            

        }
    })




// for clear-history
document.getElementById("clear-history")
    .addEventListener("click", function () {
        document.getElementById('history-container').innerHTML = '';
        alert('Are you sure you want to clear all your History? If yes press OK')




        console.log(f.format(today));

    })
