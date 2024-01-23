class Node{
    constructor(data, next=null){
        this.data=data;
        this.next=next;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    clearList(){
        this.head=null;
        this.size=0;
    }
    insertStart(data){
        this.head= new Node(data, this.head);
        this.size++; 
    }
    insertEnd(data){
        let node=new Node(data);
        let current;
        if(!this.head){
            this.heaad=node;
        }else{
            current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        this.size++;
    }
    insertPosition(data, index){
        //out of range
        if(index>0 && index>this.size){
            return console.log('slot not available!');
        }
        //start position
        if(index===0){
            this.insertStart(data);
            return;
        }
        const node = new Node(data);
        let current, previous;
        // set first to current
        current=this.head;
        let count=0;
        while(count<index){
            previous=current;
            count++;
            current=current.next;
        }
        node.next=current;
        previous.next=node;
    }
    printLinkedList(){
        let current=this.head;

        while(current){
            console.log(current.data, current.next);
            current=current.next;
        }
    }
}
const nodeList = new LinkedList();
nodeList.insertStart(200);
nodeList.insertStart(400);
nodeList.insertEnd(100);
nodeList.insertPosition(300,1);
nodeList.insertPosition(150,3);
nodeList.printLinkedList();
nodeList.clearList();
nodeList.printLinkedList();