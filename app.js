        const loginBtn = document.getElementById("login");
        loginBtn.addEventListener("click", function () {
            const loginArea = document.getElementById("login-area");
            loginArea.style.display = "none";
            const transactionArea = document.getElementById("transaction-area");
            transactionArea.style.display = "block";
        });

        const depositBtn = document.getElementById("addDeposit");
        depositBtn.addEventListener("click", function () {
            const depositNumber = getInputNumber("depositAmount");

            if(depositNumber < 0) {
                alert("Deposit number can not be negative.")
            } else {
                updateSpanText("currentDeposit", depositNumber);
                updateSpanText("currentBalance", depositNumber);

                document.getElementById("depositAmount").value = "";
            }

        });

        const withdrawBtn = document.getElementById("addWithdraw");
        withdrawBtn.addEventListener("click", function () {
            const withdrawNumber = getInputNumber("withdrawAmount");

            updateSpanText("currentWithdraw", withdrawNumber);
            updateSpanText("currentBalance", -1 * withdrawNumber);

            document.getElementById("withDrawAmount").value = "";

        });

        function getInputNumber(id) {
            const amount = document.getElementById(id).value;
            const amountNumber = parseFloat(amount);
            return amountNumber;
        }

        function updateSpanText(id, depositNumber){

            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            const totalAmount = depositNumber + currentNumber;
            document.getElementById(id).innerText = totalAmount;

        }
