<template>
    <div class="bg-success py-5">
      <!-- Header Section -->
      <div class="container text-center">
        <h1
          class="bg-light text-success fw-bold fs-4 mb-4"
          style="width: fit-content; margin: auto; padding: 0.5rem 1.5rem;"
        >
          Financial Statements
        </h1>
      </div>
  
      <!-- Financial Reports Section -->
      <div class="container">
        <!-- Report Card -->
        <div class="report-card mb-3">
          <div class="d-flex align-items-center">
            <div class="icon-container">
              <i class="fa fa-file-alt"></i>
            </div>
            <div>
              <h5 class="fw-bold mb-1 text-light">State Financial Report</h5>
              <p class="mb-0 small text-light">
                Get Access To Ogun State Comprehensive Annual Reports, Receipts Reporting And Other Financial Reports
              </p>
            </div>
          </div>
        </div>
  
        <!-- State Auditors Report -->
        <div class="report-card mb-3">
          <div class="d-flex align-items-center">
            <div class="icon-container">
              <i class="fa fa-balance-scale"></i>
            </div>
            <div>
              <h5 class="fw-bold mb-1 text-light">State Auditors Report</h5>
              <p class=" mb-0 small text-light">
                An Evaluation Of The State's Financial Entity
              </p>
            </div>
          </div>
        </div>
  
        <!-- Local Government Financial Reports -->
        <div class="report-card">
          <div class="d-flex align-items-center">
            <div class="icon-container">
              <i class="fa fa-folder-open"></i>
            </div>
            <div>
              <h5 class="fw-bold mb-1 text-light">
                Local Government Financial Reports
              </h5>
              <p class=" mb-0 small text-light">
                An Open Repository Ogun's Expenditures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'financialView',
  };
  </script>
  
  <style scoped>
  .report-card {
    border: 1px solid #e7e7e7;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    align-items: center;
    height: fit-content; 
  }
  
  .icon-container {
    flex: 0 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  
  .fa {
    font-size: 1.8rem;
  }
  
  h5 {
    margin-bottom: 0.25rem;
  }
  
  p {
    margin-bottom: 0;
  }
  </style>
  