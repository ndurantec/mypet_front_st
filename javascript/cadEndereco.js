document.addEventListener('DOMContentLoaded', function() {
            const addressForm = document.getElementById('address-form');
            const additionalAddresses = document.getElementById('additional-addresses');
            const addAddressBtn = document.getElementById('add-address');
            const addressCount = document.getElementById('address-count');
            let addressCounter = 1;
            
            
            addAddressBtn.addEventListener('click', function() {
                addressCounter++;
                const newAddress = document.getElementById('address-template').cloneNode(true);
                newAddress.id = 'address-' + addressCounter;
                
               
                const addressTitle = newAddress.querySelector('.address-title');
                addressTitle.textContent = 'Endereço ' + addressCounter;
                
               
                const removeBtn = newAddress.querySelector('.remove-address');
                removeBtn.style.display = 'block';
                
              
                const inputs = newAddress.querySelectorAll('input');
                inputs.forEach(input => {
                    input.value = '';
                    input.id = input.name + '-' + addressCounter;
                });
                
               
                removeBtn.addEventListener('click', function() {
                    newAddress.remove();
                    addressCounter--;
                    updateAddressCount();
                });
                
               
                additionalAddresses.appendChild(newAddress);
                updateAddressCount();
            });
            
          
            function updateAddressCount() {
                addressCount.textContent = addressCounter;
            }
            
            
            addressForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                
                const addresses = [];
                const addressGroups = document.querySelectorAll('.address-group');
                
                addressGroups.forEach((group, index) => {
                    const inputs = group.querySelectorAll('input');
                    const addressData = {};
                    
                    inputs.forEach(input => {
                        addressData[input.name] = input.value;
                    });
                    
                    addresses.push(addressData);
                });
                
                
                console.log('Endereços a serem cadastrados:', addresses);
                
             
                alert(`${addresses.length} endereço(s) cadastrado(s) com sucesso!`);
                
                
            });
        });