EXECUTION PHASE IN JS
JS IS SINGLE THREADED
JS WORKS IN PROCESSES
JS HAVE 2 PHASES:
1. MEMORY PHASE
2. EXECUTION PHASE

JS HAVE 3 EXECUTION'S:
1. GLOBAL EX -> USE THE "THIS"
   🌍 What is the Global Execution Context?
When JavaScript code runs, it first creates a Global Execution Context (GEC) — this is where your code starts running, even before any function is called.
In this context:
The global object is created.
Special keywords like this and window (in browsers) are set up.
💡 Remember:
this in global scope is usually window (in browser).
Inside functions, this can vary depending on how the function is called (or if it's strict mode).
Inside arrow functions, this is lexically bound (it uses the value from the outer scope).

3. FUNCTIONAL EX
4. EVAL EX

<img width="1920" height="1080" alt="{F1FF8F12-3FDC-4998-AB70-849C41387FEF}" src="https://github.com/user-attachments/assets/38c4cb32-b89a-464e-a71d-61a43b40b1c4" />
<img width="840" height="598" alt="{71577B4D-9226-454D-AA03-09640C0753CF}" src="https://github.com/user-attachments/assets/c89779a9-9fba-4166-8221-aceac30eb75d" />
<img width="749" height="505" alt="{96DA0839-29F6-4CF8-B29E-1CC5B07392FE}" src="https://github.com/user-attachments/assets/3abaa49e-ebd7-4744-9186-297323a62c8c" />
