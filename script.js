function showForm() {
            document.getElementById('homePage').classList.remove('active');
            document.getElementById('formPage').classList.add('active');
        }

        function handleSubmit(event) {
            event.preventDefault();
            
            // Hide the form
            document.getElementById('ballotForm').style.display = 'none';
            
            // Show error message
            document.getElementById('errorMessage').classList.remove('hidden');
        }