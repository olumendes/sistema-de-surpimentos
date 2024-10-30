document.addEventListener("DOMContentLoaded", function() {
    const aprovarBtns = document.querySelectorAll(".aprovar-btn");
    const reprovarBtns = document.querySelectorAll(".reprovar-btn");

    
    function updateStatus(row, status) {
        row.cells[4].innerText = status;
    }

    aprovarBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const row = this.closest("tr");
            updateStatus(row, "Aprovado");
        });
    });

    reprovarBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const row = this.closest("tr");
            updateStatus(row, "Reprovado");
        });
    });

    
    document.getElementById("nova-requisicao-btn").addEventListener("click", function() {
        const form = document.getElementById("nova-requisicao-form");
        form.style.display = form.style.display === "none" ? "block" : "none";
    });

    
    document.getElementById("add-requisicao-btn").addEventListener("click", function() {
        const usuario = document.getElementById("usuario").value;
        const item = document.getElementById("item").value;
        const quantidade = document.getElementById("quantidade").value;
        const status = document.getElementById("status").value;

        
        const table = document.getElementById("requisicoes-table").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${table.rows.length + 1}</td>
            <td>${usuario}</td>
            <td>${item}</td>
            <td>${quantidade}</td>
            <td>${status}</td>
            <td>
                <button class="aprovar-btn">Aprovar</button>
                <button class="reprovar-btn">Reprovar</button>
            </td>
        `;

       
        document.getElementById("usuario").value = '';
        document.getElementById("item").value = '';
        document.getElementById("quantidade").value = '';
        document.getElementById("status").value = 'Pendente';

        
        attachButtonListeners(newRow);
    });

    function attachButtonListeners(row) {
        const newAprovarBtn = row.querySelector(".aprovar-btn");
        const newReprovarBtn = row.querySelector(".reprovar-btn");
        
        newAprovarBtn.addEventListener("click", function() {
            updateStatus(row, "Aprovado");
        });
        
        newReprovarBtn.addEventListener("click", function() {
            updateStatus(row, "Reprovado");
        });
    }
});
