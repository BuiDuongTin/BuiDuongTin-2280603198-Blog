import { BlogPost } from '@/types/blog'

export const blogPosts: BlogPost[] = [
  // Java Posts
  {
    id: 'java-oop-basics',
    title: 'Lập trình hướng đối tượng (OOP) trong Java - Khái niệm cơ bản',
    date: '2025-01-15',
    category: 'java',
    excerpt: 'Tìm hiểu về 4 tính chất cơ bản của OOP: Encapsulation, Inheritance, Polymorphism và Abstraction trong Java',
    tags: ['Java cơ bản', 'OOP', 'Lập trình mạng'],
    content: `
Lập trình hướng đối tượng (OOP - Object-Oriented Programming) là một trong những paradigm quan trọng nhất trong Java. OOP giúp tổ chức code tốt hơn, dễ bảo trì và tái sử dụng.

**4 tính chất cơ bản của OOP:**

1. **Encapsulation (Đóng gói)**: Ẩn giấu dữ liệu bên trong class và chỉ cho phép truy cập thông qua các phương thức public. Điều này giúp bảo vệ dữ liệu và tránh được các thay đổi không mong muốn.

\`\`\`java
public class Student {
    private String name;
    private int age;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}
\`\`\`

2. **Inheritance (Kế thừa)**: Cho phép class con kế thừa các thuộc tính và phương thức từ class cha, giúp tái sử dụng code hiệu quả.

3. **Polymorphism (Đa hình)**: Khả năng sử dụng một interface chung cho nhiều kiểu dữ liệu khác nhau. Method overloading và method overriding là hai dạng đa hình phổ biến.

4. **Abstraction (Trừu tượng)**: Ẩn đi các chi tiết phức tạp và chỉ hiển thị những tính năng cần thiết. Abstract class và Interface là hai cách để implement abstraction.

**Ứng dụng trong Lập trình mạng:**
OOP rất hữu ích trong lập trình mạng khi chúng ta cần tạo các đối tượng như Socket, ServerSocket, Client, Server với các thuộc tính và hành vi riêng biệt.
    `
  },
  {
    id: 'java-collections-framework',
    title: 'Java Collections Framework - Quản lý dữ liệu hiệu quả',
    date: '2025-01-18',
    category: 'java',
    excerpt: 'Khám phá các collection phổ biến: ArrayList, HashMap, HashSet và cách sử dụng chúng trong thực tế',
    tags: ['Java cơ bản', 'Collections', 'Data Structures'],
    content: `
Java Collections Framework cung cấp một kiến trúc thống nhất để lưu trữ và thao tác với nhóm các đối tượng. Nó giúp việc xử lý dữ liệu trở nên dễ dàng và hiệu quả hơn.

**Các Collection phổ biến:**

1. **ArrayList**: Danh sách động, cho phép thêm/xóa phần tử linh hoạt
\`\`\`java
ArrayList<String> list = new ArrayList<>();
list.add("Java");
list.add("Python");
list.add("JavaScript");
\`\`\`

2. **HashMap**: Lưu trữ dữ liệu dưới dạng key-value pairs
\`\`\`java
HashMap<String, Integer> map = new HashMap<>();
map.put("Java", 95);
map.put("Python", 88);
\`\`\`

3. **HashSet**: Tập hợp không chứa phần tử trùng lặp
\`\`\`java
HashSet<String> set = new HashSet<>();
set.add("TCP");
set.add("UDP");
set.add("HTTP");
\`\`\`

**Khi nào sử dụng Collection nào?**
- Sử dụng ArrayList khi cần truy cập ngẫu nhiên và thứ tự quan trọng
- Sử dụng HashMap khi cần tra cứu nhanh theo key
- Sử dụng HashSet khi cần đảm bảo tính duy nhất của phần tử

**Ứng dụng trong Network Programming:**
Collections rất hữu ích để quản lý danh sách client connections, cache data, hoặc queue các message trong ứng dụng mạng.
    `
  },
  {
    id: 'java-socket-programming',
    title: 'Socket Programming với Java - Xây dựng ứng dụng Client-Server',
    date: '2025-01-22',
    category: 'java',
    excerpt: 'Hướng dẫn chi tiết cách tạo ứng dụng client-server đơn giản sử dụng Socket trong Java',
    tags: ['Java Network', 'Socket', 'Lập trình mạng', 'TCP/IP'],
    content: `
Socket Programming là nền tảng của lập trình mạng, cho phép các ứng dụng giao tiếp với nhau qua mạng. Java cung cấp các class Socket và ServerSocket để implement TCP connection.

**Tạo Server:**
\`\`\`java
import java.io.*;
import java.net.*;

public class SimpleServer {
    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(8080);
            System.out.println("Server đang chờ kết nối...");
            
            Socket clientSocket = serverSocket.accept();
            System.out.println("Client đã kết nối!");
            
            BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream())
            );
            PrintWriter out = new PrintWriter(
                clientSocket.getOutputStream(), true
            );
            
            String message = in.readLine();
            System.out.println("Nhận được: " + message);
            out.println("Server đã nhận: " + message);
            
            clientSocket.close();
            serverSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

**Tạo Client:**
\`\`\`java
import java.io.*;
import java.net.*;

public class SimpleClient {
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost", 8080);
            
            PrintWriter out = new PrintWriter(
                socket.getOutputStream(), true
            );
            BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream())
            );
            
            out.println("Hello Server!");
            String response = in.readLine();
            System.out.println("Server phản hồi: " + response);
            
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

**Các bước cơ bản:**
1. Server tạo ServerSocket và lắng nghe trên một port
2. Client tạo Socket và kết nối đến server
3. Sử dụng InputStream và OutputStream để trao đổi dữ liệu
4. Đóng connection sau khi hoàn tất

Socket Programming là kỹ năng quan trọng để xây dựng các ứng dụng chat, game online, và nhiều ứng dụng network khác.
    `
  },
  {
    id: 'java-multithreading',
    title: 'Multithreading trong Java - Lập trình đa luồng',
    date: '2025-01-25',
    category: 'java',
    excerpt: 'Tìm hiểu về Thread, Runnable và cách xử lý nhiều tác vụ đồng thời trong Java',
    tags: ['Java cơ bản', 'Multithreading', 'Concurrency'],
    content: `
Multithreading là khả năng thực thi nhiều thread (luồng) đồng thời trong một chương trình. Điều này đặc biệt quan trọng trong lập trình mạng khi cần xử lý nhiều client cùng lúc.

**Cách tạo Thread:**

**Cách 1: Extend Thread class**
\`\`\`java
public class MyThread extends Thread {
    public void run() {
        System.out.println("Thread đang chạy: " + getName());
    }
    
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        t1.start();
        t2.start();
    }
}
\`\`\`

**Cách 2: Implement Runnable interface (Được khuyến nghị)**
\`\`\`java
public class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable đang chạy");
    }
    
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable());
        Thread t2 = new Thread(new MyRunnable());
        t1.start();
        t2.start();
    }
}
\`\`\`

**Ứng dụng trong Server Multi-client:**
\`\`\`java
public class MultiThreadServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("Server đang chạy...");
        
        while (true) {
            Socket clientSocket = serverSocket.accept();
            // Tạo thread mới cho mỗi client
            new Thread(new ClientHandler(clientSocket)).start();
        }
    }
}

class ClientHandler implements Runnable {
    private Socket socket;
    
    public ClientHandler(Socket socket) {
        this.socket = socket;
    }
    
    public void run() {
        // Xử lý client request
        System.out.println("Đang xử lý client...");
    }
}
\`\`\`

**Lợi ích của Multithreading:**
- Tăng hiệu suất sử dụng CPU
- Cải thiện khả năng đáp ứng của ứng dụng
- Cho phép xử lý nhiều client đồng thời trong server

Tuy nhiên, cần chú ý đến thread synchronization để tránh race condition và deadlock.
    `
  },
  {
    id: 'java-http-client',
    title: 'HTTP Client trong Java - Giao tiếp với REST API',
    date: '2025-01-28',
    category: 'java',
    excerpt: 'Sử dụng HttpClient để thực hiện HTTP requests và làm việc với RESTful APIs',
    tags: ['Java Network', 'HTTP', 'REST API', 'Lập trình mạng'],
    content: `
Java 11 giới thiệu HttpClient API mới, giúp việc gửi HTTP request và nhận response trở nên đơn giản hơn. Đây là công cụ quan trọng để tích hợp với các REST API.

**Tạo HTTP GET Request:**
\`\`\`java
import java.net.http.*;
import java.net.*;

public class HttpClientExample {
    public static void main(String[] args) {
        try {
            // Tạo HttpClient
            HttpClient client = HttpClient.newHttpClient();
            
            // Tạo request
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.example.com/users"))
                .GET()
                .build();
            
            // Gửi request và nhận response
            HttpResponse<String> response = client.send(
                request,
                HttpResponse.BodyHandlers.ofString()
            );
            
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response Body: " + response.body());
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

**HTTP POST Request với JSON:**
\`\`\`java
import java.net.http.*;
import java.net.*;

public class PostExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        
        String json = "{\\"name\\":\\"John\\",\\"email\\":\\"john@example.com\\"}";
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.example.com/users"))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();
        
        HttpResponse<String> response = client.send(
            request,
            HttpResponse.BodyHandlers.ofString()
        );
        
        System.out.println(response.body());
    }
}
\`\`\`

**Async Request (Bất đồng bộ):**
\`\`\`java
client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
    .thenApply(HttpResponse::body)
    .thenAccept(System.out::println)
    .join();
\`\`\`

**Các tính năng của HttpClient:**
- Hỗ trợ HTTP/1.1 và HTTP/2
- Đồng bộ và bất đồng bộ
- Xử lý authentication, cookies, redirects
- Builder pattern dễ sử dụng

HttpClient là công cụ mạnh mẽ để xây dựng các ứng dụng consume REST APIs, microservices, và web scraping.
    `
  },

  // JavaScript Posts
  {
    id: 'javascript-dom-manipulation',
    title: 'DOM Manipulation - Thao tác với Document Object Model',
    date: '2025-01-20',
    category: 'javascript',
    excerpt: 'Học cách tương tác với HTML elements, thay đổi nội dung và style sử dụng JavaScript',
    tags: ['JavaScript cơ bản', 'DOM', 'Web Development'],
    content: `
Document Object Model (DOM) là một interface lập trình cho HTML và XML documents. Nó biểu diễn trang web như một cây các đối tượng mà JavaScript có thể thao tác.

**Selecting Elements:**
\`\`\`javascript
// Chọn element theo ID
const header = document.getElementById('header');

// Chọn element theo class
const buttons = document.getElementsByClassName('btn');

// Chọn element theo selector (modern way)
const mainTitle = document.querySelector('h1');
const allParagraphs = document.querySelectorAll('p');
\`\`\`

**Thay đổi nội dung:**
\`\`\`javascript
// Thay đổi text content
element.textContent = 'Nội dung mới';

// Thay đổi HTML
element.innerHTML = '<strong>HTML mới</strong>';

// Thay đổi attribute
element.setAttribute('class', 'active');
element.src = 'new-image.jpg';
\`\`\`

**Thay đổi styles:**
\`\`\`javascript
element.style.color = 'blue';
element.style.backgroundColor = '#f0f0f0';
element.style.display = 'none';

// Thêm/xóa class
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('show');
\`\`\`

**Tạo và xóa elements:**
\`\`\`javascript
// Tạo element mới
const newDiv = document.createElement('div');
newDiv.textContent = 'Div mới';
newDiv.className = 'container';

// Thêm vào DOM
document.body.appendChild(newDiv);

// Xóa element
element.remove();
\`\`\`

**Event Handling:**
\`\`\`javascript
button.addEventListener('click', function() {
    console.log('Button được click!');
});

input.addEventListener('input', function(e) {
    console.log('Giá trị hiện tại:', e.target.value);
});
\`\`\`

DOM manipulation là nền tảng để tạo ra các trang web động và interactive. Nó là kỹ năng cần thiết cho mọi web developer.
    `
  },
  {
    id: 'javascript-async-await',
    title: 'Async/Await - Xử lý bất đồng bộ trong JavaScript',
    date: '2025-01-23',
    category: 'javascript',
    excerpt: 'Tìm hiểu về Promises, async/await và cách xử lý operations bất đồng bộ một cách elegant',
    tags: ['JavaScript cơ bản', 'Async', 'Promises'],
    content: `
JavaScript là ngôn ngữ bất đồng bộ, và async/await là cách hiện đại nhất để xử lý asynchronous operations, giúp code dễ đọc và dễ maintain hơn.

**Callback Hell (vấn đề cũ):**
\`\`\`javascript
getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            getMoreData(c, function(d) {
                // Callback hell!
            });
        });
    });
});
\`\`\`

**Promises:**
\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Thành công!');
        } else {
            reject('Có lỗi!');
        }
    }, 1000);
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
\`\`\`

**Async/Await (modern approach):**
\`\`\`javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

// Gọi async function
fetchData();
\`\`\`

**Multiple async operations:**
\`\`\`javascript
// Chạy tuần tự
async function sequential() {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    return { user, posts };
}

// Chạy song song
async function parallel() {
    const [users, posts] = await Promise.all([
        fetchUsers(),
        fetchPosts()
    ]);
    return { users, posts };
}
\`\`\`

**Error Handling:**
\`\`\`javascript
async function getData() {
    try {
        const response = await fetch('/api/data');
        
        if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; // Re-throw if needed
    }
}
\`\`\`

**Lợi ích của Async/Await:**
- Code dễ đọc hơn, trông giống synchronous code
- Error handling đơn giản với try/catch
- Debugging dễ dàng hơn
- Tránh được callback hell

Async/await là công cụ cần thiết khi làm việc với APIs, database operations, và bất kỳ tác vụ bất đồng bộ nào.
    `
  },
  {
    id: 'javascript-fetch-api',
    title: 'Fetch API - Giao tiếp với Server trong JavaScript',
    date: '2025-01-26',
    category: 'javascript',
    excerpt: 'Sử dụng Fetch API để thực hiện HTTP requests và làm việc với RESTful APIs',
    tags: ['JavaScript', 'Fetch API', 'HTTP', 'Lập trình mạng'],
    content: `
Fetch API là một interface hiện đại để thực hiện HTTP requests trong JavaScript. Nó dựa trên Promises và cung cấp cách thức mạnh mẽ và linh hoạt để tương tác với servers.

**Basic GET Request:**
\`\`\`javascript
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
\`\`\`

**With Async/Await:**
\`\`\`javascript
async function getUsers() {
    try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
\`\`\`

**POST Request:**
\`\`\`javascript
async function createUser(userData) {
    try {
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Sử dụng
createUser({ name: 'John', email: 'john@example.com' });
\`\`\`

**PUT và DELETE Requests:**
\`\`\`javascript
// UPDATE
async function updateUser(id, userData) {
    const response = await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    return response.json();
}

// DELETE
async function deleteUser(id) {
    const response = await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'DELETE'
    });
    return response.json();
}
\`\`\`

**Handling Response Status:**
\`\`\`javascript
async function fetchWithErrorHandling(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch failed:', error);
        throw error;
    }
}
\`\`\`

**Headers và Authentication:**
\`\`\`javascript
const response = await fetch('https://api.example.com/protected', {
    headers: {
        'Authorization': 'Bearer YOUR_TOKEN',
        'Content-Type': 'application/json'
    }
});
\`\`\`

Fetch API là công cụ quan trọng để xây dựng Single Page Applications (SPAs) và tương tác với backend APIs.
    `
  },
  {
    id: 'javascript-event-loop',
    title: 'Event Loop trong JavaScript - Cách JavaScript xử lý Async',
    date: '2025-01-29',
    category: 'javascript',
    excerpt: 'Hiểu về Event Loop, Call Stack, Task Queue và cách JavaScript xử lý code bất đồng bộ',
    tags: ['JavaScript cơ bản', 'Event Loop', 'Async', 'Advanced'],
    content: `
Event Loop là cơ chế cho phép JavaScript xử lý operations bất đồng bộ mặc dù là single-threaded. Hiểu về Event Loop giúp bạn viết code hiệu quả và tránh các lỗi liên quan đến async.

**JavaScript Runtime Components:**

1. **Call Stack**: Nơi theo dõi function calls
2. **Web APIs**: Browser cung cấp (setTimeout, DOM events, fetch, etc.)
3. **Task Queue** (Callback Queue): Hàng đợi các callbacks
4. **Microtask Queue**: Hàng đợi cho Promises
5. **Event Loop**: Kiểm tra và di chuyển tasks từ queue vào stack

**Ví dụ minh họa:**
\`\`\`javascript
console.log('1');

setTimeout(() => {
    console.log('2');
}, 0);

Promise.resolve().then(() => {
    console.log('3');
});

console.log('4');

// Output: 1, 4, 3, 2
\`\`\`

**Giải thích:**
1. "1" được log ngay lập tức (synchronous)
2. setTimeout callback được gửi đến Web API
3. Promise được resolve và callback vào Microtask Queue
4. "4" được log (synchronous)
5. Stack trống, Event Loop kiểm tra Microtask Queue trước
6. "3" được log (Promise callback)
7. Sau đó mới đến Task Queue
8. "2" được log (setTimeout callback)

**Priority:**
Microtask Queue (Promises) > Task Queue (setTimeout, setInterval)

**Blocking Event Loop:**
\`\`\`javascript
// BAD: Block event loop
function blockingOperation() {
    const start = Date.now();
    while (Date.now() - start < 3000) {
        // Block for 3 seconds
    }
}

// GOOD: Non-blocking
async function nonBlockingOperation() {
    await new Promise(resolve => setTimeout(resolve, 3000));
}
\`\`\`

**Practical Example:**
\`\`\`javascript
async function processData() {
    console.log('Start processing');
    
    // Simulate API calls
    const user = await fetch('/api/user').then(r => r.json());
    console.log('User loaded');
    
    const posts = await fetch('/api/posts').then(r => r.json());
    console.log('Posts loaded');
    
    return { user, posts };
}

processData().then(result => {
    console.log('All data loaded:', result);
});

console.log('Function called');
// Output:
// Function called
// Start processing
// User loaded
// Posts loaded
// All data loaded: ...
\`\`\`

**Best Practices:**
- Tránh blocking operations trong main thread
- Sử dụng async/await cho code dễ đọc
- Hiểu sự khác biệt giữa Microtasks và Tasks
- Sử dụng Web Workers cho heavy computations

Hiểu về Event Loop giúp bạn debug async code hiệu quả và tối ưu performance của ứng dụng.
    `
  }
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

export function getBlogPostsByCategory(category: 'java' | 'javascript'): BlogPost[] {
  return blogPosts
    .filter(post => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
