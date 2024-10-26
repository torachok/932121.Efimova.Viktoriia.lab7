function getRandomSize(min, max) {    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createItem(type) {    const quantity = parseInt(document.getElementById('quantity-input').value);
    for (let i = 0; i < quantity; i++) {        const item = document.createElement('div');
        item.classList.add('item', type);        
        let size;        let left, top;
        if (type === 'square') {            
            size = getRandomSize(50, 200); 
            item.style.width = size + 'px';            
            item.style.height = size + 'px';
            left = Math.random() * (window.innerWidth - size) + 'px';            
            top = Math.random() * (window.innerHeight - size) + 'px';
        } else if (type === 'triangle') 
            {            
            size = getRandomSize(50, 200);
            item.style.borderLeft = size + 'px solid transparent';
            item.style.borderRight = size + 'px solid transparent';
            item.style.borderBottom = size + 'px solid blue';            
            left = Math.random() * (window.innerWidth - 2*size) + 'px';
            top = Math.random() * (window.innerHeight - size) + 'px';        
        } else if (type === 'circle') {
            size = getRandomSize(50, 200);            
            item.style.width = size + 'px';
            item.style.height = size + 'px';            
            item.style.borderRadius = '50%';
            left = Math.random() * (window.innerWidth - size) + 'px';            
            top = Math.random() * (window.innerHeight - size) + 'px';
        }
        item.style.left = left;        
        item.style.top = top;
        item.addEventListener('click', () => {    
            if (type !== 'triangle') {            
                item.classList.toggle('selected');
            }            if (type === 'triangle' && item.style.borderBottomColor === 'blue') 
                {
                item.style.borderBottomColor = 'yellow';             
            } else if (type === 'triangle') {
                item.style.borderBottomColor = 'blue';             
            }
        });
        item.addEventListener('dblclick', () => 
            {            
                item.remove();
        });
        document.body.appendChild(item);    
    }
}
