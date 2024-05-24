# Custom-PC-website

### Project Description for Resume

**Project Title:** Pioneers Custom Pc Website 

**Technologies Used:** React, Bootstrap, JavaScript, HTML, CSS

**Project Duration:** 1 week

**Project Overview:**
This project involved the development of a web-based application aimed at enhancing the user experience in selecting and configuring computer hardware components. The application allows users to choose between internal and external hardware options, configure their selections with detailed specifications, and add their customized products to a shopping cart. This project showcases my skills in frontend development, particularly in creating dynamic and responsive user interfaces.

**Key Features:**
1. **Dynamic Product Selection:** Users can choose between different categories of hardware (internal and external) and select specific products within those categories.
2. **Configurable Options:** Each product category includes various configurations (e.g., RAM, Storage, Graphics Card for internal hardware; Keyboard, Mouse, Microphone for external hardware) that users can customize based on their needs.
3. **Real-time Price Calculation:** The application dynamically calculates the total price of selected configurations, providing users with an immediate understanding of their customization choices' financial impact.
4. **Responsive Design:** Utilizing Bootstrap, the application is fully responsive, ensuring an optimal user experience across various devices and screen sizes.
5. **Shopping Cart Integration:** Users can add their configured products to a shopping cart, which helps in managing and reviewing their selections before making a final purchase.

**Detailed Implementation:**

1. **User Interface Design:**
   - The project started with designing a user-friendly interface using React and Bootstrap. The design focused on simplicity and ease of navigation, ensuring that users could easily select and configure hardware products.
   - Implemented a fluid container to ensure the application adapts to different screen sizes, providing a seamless user experience.

2. **State Management:**
   - Utilized React's useState and useEffect hooks to manage the application's state. The useState hook was used to track the selected product, configurations, and total price, while useEffect was employed to dynamically update the total price based on user selections.
   - Ensured that state updates were efficient and the user interface responded promptly to user interactions.

3. **Product Configuration Logic:**
   - Developed a robust product configuration logic that allows users to select various options within a product category. Each configuration option includes a name, price, and image to help users make informed decisions.
   - Implemented a dynamic dropdown menu for each configuration category, updating the available options based on the user's selections.

4. **Real-time Price Calculation:**
   - Created a mechanism to calculate the total price of the selected configurations in real-time. This feature involved summing the prices of individual configurations whenever the user made a selection.
   - Used useEffect to trigger the price recalculation whenever the selected configurations changed, ensuring the displayed total price was always accurate.

5. **Responsive Design with Bootstrap:**
   - Leveraged Bootstrap's grid system and components to ensure the application was fully responsive. Used Bootstrap classes to style the application and maintain consistency across different parts of the user interface.
   - Ensured that images, buttons, and forms resized appropriately on different devices, providing a smooth user experience on both mobile and desktop platforms.

6. **Shopping Cart Functionality:**
   - Implemented a feature that allows users to add their configured products to a shopping cart. Each cart item includes detailed information about the product, its configurations, and the total price.
   - Provided users with the ability to review their cart items before proceeding to checkout, enhancing the overall shopping experience.

**Challenges and Solutions:**
- **State Management Complexity:** Managing the state of multiple configuration options and their interdependencies was complex. This was addressed by thoroughly planning the state structure and using React's hooks effectively to manage state changes.
- **Dynamic Price Calculation:** Ensuring the price was accurately updated in real-time required careful implementation of the useEffect hook. Debugging and testing were crucial to ensure all edge cases were handled correctly.
- **Responsive Design:** Achieving a fully responsive design that looked good on all devices involved extensive testing and tweaking of Bootstrap classes. Media queries were also used to handle specific styling requirements for different screen sizes.

**Outcome and Impact:**
- The project successfully demonstrated my ability to develop a complex, interactive web application from scratch. It highlighted my skills in React, state management, and responsive design.
- The application provided users with a seamless and intuitive way to configure and purchase hardware products, potentially improving the shopping experience and customer satisfaction.
- This project also enhanced my problem-solving skills and ability to work on large-scale projects, preparing me for future roles that require strong frontend development expertise.

**Personal Reflection:**
Working on this project was an enriching experience that allowed me to apply theoretical knowledge to a real-world problem. It strengthened my understanding of modern web development practices and tools. The project's success has motivated me to continue exploring advanced frontend development techniques and contribute to user-centric web applications.

**Skills Gained:**
- Proficient in React and its ecosystem
- Experienced in using Bootstrap for responsive design
- Strong understanding of state management and hooks in React
- Ability to develop user-friendly and interactive web applications
- Enhanced problem-solving and debugging skills

This project is a testament to my capabilities as a frontend developer and my commitment to creating high-quality, user-focused applications.
