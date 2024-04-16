<template>
    <div class="Transactions">
      <div data-v-469af010="" class="my-border">
        <div class="left-border"></div>
        
        <div class="right-border">
          <div class="table-container">
            <h2>Students Pending Borrowed Books</h2>
            <div class="search-bar">
              <input type="text" placeholder="Search by Student LRN or Name" class="search-input">
              <button class="search-button">
                <!-- Add your search icon here -->
              </button>
            </div>
            <table class="book-table">
              <thead>
                <tr>
                  <th>Borrow_id</th>
                  <th>Student_lrn</th>
                  <th>Student_name</th>
                  <th>Book_title</th>
                  <th>Borrow_date</th>
                  <th>Return_date</th>
                </tr>
              </thead>
              <tbody>
                <!-- Table rows will be dynamically populated -->
              </tbody>
            </table>
          </div>
        </div>
        <div class="circle-border"></div>
        <div class="sna">ST. NICHOLAS ACADEMY</div>
        <div class="inv">INVENTORY</div>
        <div class="pen">PENDING RECORDS</div>
        <div class="tra">TRANSACTIONS</div>
        <div class="out">LOGOUT</div>
      </div>
    </div>
  </template>

  <style scoped>
  .left-border {
    position: relative;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    border-radius: 0vw 0 0 0vw;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    background-color: #F1EFEF;
  }
  
  .right-border {
    width: 64vw;
    height: 60vh;
    top: 15vh;
    left: 22vw;
    gap: 0px;
    border-radius: 0vw;
    opacity: 0px;
    border: 1px solid F1EFEF;
    background-color: #F1EFEF;
    position: absolute;
    z-index: 1; /* Ensures it's visually above my-border */
  
  }
  
  .my-border {
    width: 90vw;
    height: 80vh;
    top: 5vh;
    left: 5vw;
    gap: 0px;
    border-radius: 0vw;
    opacity: 0px;
    border: 1px solid F1EFEF;
    background-color: #11235A;
    position: relative;
  }
  
  .circle-border {
    width: 10%;
    height: 18vh;
    border-radius: 50%;
    background-color: #F1EFEF;
    position: absolute;
    top: 5vh;
    right: 84%;
    background-image: url(C:\xampp\htdocs\Library\library\src\assets\stlogo.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
  
  .sna {
    position: absolute;
    top: calc(5vh + 22vh + 5px); /* Position it below the circle border */
    right: 82%; /* Same as circle-border */
    color: #11235A; /* Change text color */
    font-size: 1.2vw; /* Adjust font size */
    font-weight: bold; /* Make it bold */
    white-space: nowrap; /* Ensure text remains on one line */
  }
  
  .inv {
    position: absolute;
    top: calc(10vh + 28vh + 10px); /* Position it below the circle border */
    right: 86%; /* Same as circle-border */
    color: #11235A; /* Change text color */
    font-size: 1.1vw; /* Adjust font size */
    font-weight: bold; /* Make it bold */
    white-space: nowrap; /* Ensure text remains on one line */
  }
  
  .pen {
    position: absolute;
    top: calc(15vh + 32vh + 15px); /* Position it below the circle border */
    right: 83%; /* Same as circle-border */
    color: #11235A; /* Change text color */
    font-size: 1.1vw; /* Adjust font size */
    font-weight: bold; /* Make it bold */
    white-space: nowrap; /* Ensure text remains on one line */
  }
  
  .tra {
    position: absolute;
    top: calc(20vh + 36vh + 20px); /* Position it below the circle border */
    right: 85%; /* Same as circle-border */
    color: #11235A; /* Change text color */
    font-size: 1.1vw; /* Adjust font size */
    font-weight: bold; /* Make it bold */
    white-space: nowrap; /* Ensure text remains on one line */
  }
  
  .out {
    position: absolute;
    top: calc(27vh + 44vh + 27px); /* Position it below the circle border */
    right: 88%; /* Same as circle-border */
    color: #11235A; /* Change text color */
    font-size: .8vw; /* Adjust font size */
    font-weight: bold; /* Make it bold */
    white-space: nowrap; /* Ensure text remains on one line */
  }
  .search-bar {
  position: absolute;
  top: -70px;
  left: 0px;
  display: flex;
  align-items: center;
}

.search-input {
  width: 250px; /* Adjust width as needed */
  height: 25px; /* Adjust height as needed */
  padding: 1px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.search-button {
  width: 30px; /* Adjust width as needed */
  height: 30px; /* Adjust height as needed */
  margin-left: 5px;
  background-color: #11235A; /* Adjust background color */
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
  
  .book-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border: 1px solid #ddd; /* Add border */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Add shadow */
  }
  
  .book-table th,
  .book-table td {
    padding: 12px;
    text-align: left;
    border: 1px solid; /* Remove border from cells */
  }
  
  .book-table th {
    background-color: #f2f2f2;
    font-weight: bold;
    color: #11235A; /* Change text color */
    text-transform: uppercase;
    text-align: center; /* Center the text */
  }
  
  .book-table tbody tr:nth-child(even) {
    background-color: #f9f9f9; /* Alternate row color */
  }
  
  .book-table tbody tr:hover {
    background-color: #f2f2f2; /* Hover row color */
  }

  
  </style>
  