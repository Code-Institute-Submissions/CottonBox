# Cotton Box

This project provides a site where potential and returning customers are able to browse and potentially buy the designer Korean clothing that are available. This is done by providing a modern website that is not only well designed but is also easy to navigate.

## UX

### User Stories

1. As a **new customer**, when I load the landing page, I would like to see that it contains a link for each of the different categories of clothing available, so that I am able to quickly view all items of the desired category.

- **Acceptance Criteria**

- Given that I am a new customer, when I go to the landing page, the website will show me the different categories of clothing available. When I click on each of the 'cards' it will take me to the corresponding page.

- The wireframes for this can be found [here](wireframes/wireframes.pdf).

2. As a **new customer**, I would like to go to the 'About Us' page, so that I can find out more information about the store/company such as the history and where the store/company is located.

- **Acceptance Criteria**

- Given that I am a new customer, when I go to the ‘About Us’ page, the website should provide me all of the information about the store/company and there should be a map with the location of the store/company.

- The wireframes for this can be found [here](wireframes/wireframes.pdf).

3. As a **Mandarin speaking customer**, I would like to change the language of the content, so that I am able to understand the site easier and to navigate the site more easily.

- **Acceptance Criteria**

- Given that I am a mandarin speaking customer, when I go to the website and I select the flag that represents my language from the dropdown menu, the language of the website will change to the selected language.

- The wireframes for this can be found [here](wireframes/wireframes.pdf).

4. As a **new/existing customer**, I would like to go to the ‘Contact Us’ page and fill out the form, so that I am able to send a message to the company about general questions or problems that I am having.

- **Acceptance Criteria**

- Given that I am an existing customer, when I go to the ‘Contact Us’ page, the website will present a form where I am able to write what I would like to discuss. When I click the send button, a message appears saying “Thank you for contacting us! We will reply to you soon”.

- The wireframes for this can be found [here](wireframes/wireframes.pdf).

5. As a **new/existing customer**, I would like to search to search for an item, so that I am able to quickly find all of the relevant items of clothing I am looking for.

- **Acceptance Crieria**

- Given that I am a existing customer, when I type in the item that I would like to search for and press enter, the page should automatically present only the products that I have searched for.

- The wireframes for this can be found [here](wireframes/wireframes.pdf).

### Wireframes

- All device wireframes can be found [here](wireframes/wireframes.pdf).

## Features

During the development of the project, I have created seperate branches for each of the features that I have implemented. This was done to preserve the stability of the master branch.

### Existing Features

1. #### Header

   Allows users to quickly and easy navigate to different pages and to search for products. On tablet and mobile, the user will have to press the menu button to display the navigation and search bar.

   Also allows users to switch between different languages from the language dropdown.

2. #### Callout

   Provides the user with additional information such as sales or annoucements. This can be dismissed by the user if they wish to not see it by clicking on the X in the top right corner.

3. #### New-in Section

   Notifies the user of recently added items of clothing and provides them a link to the page where they can view the item.

4. #### Categories Section

   Allows the user to navigate to the corresponding categeory page by clicking on the category card.

5. #### Footer

   Allows the user to quickly and easily navigate to different pages and provides additional links such as the sitemap and social media that are not available in the header.

6. #### Product Content

   This feature is implemented on all product pages and provides the user a place to see all items of the corresponding category.

7. #### About Page

   This allows the users to view more information about the company such as when it was founded, what the company does and where to find them.

8. #### Map

   On the 'About Us' page, the sites provides a map which locates the head office of the company. This allows users to view where the head office is located.

9. #### Contact Form

   On the 'Contact Us' page, the site provides a form in which the user can send an email to the company about any enquiry by filling out the fields and clicking the send button.

### Features to Implement

- When working links for social media are available, I will be including them in the social media section of the footer.
- As I progress with the course and reach the relevant section, I will be implementing dynamic links for each of the products.

## Technologies Used

- [HTML](https://html.spec.whatwg.org/multipage/)

  - The project uses **HTML** for the structure of the website.

- [CSS](https://www.w3.org/Style/CSS/)

  - The project uses **CSS** to style the website.

- [BootStrap](https://getbootstrap.com/)

  - The project uses **Bootstrap** for responsiveness and styling of the website.

- [JavaScript](https://www.javascript.com/)

  - The project uses **JavaScript** for the script files for site functionality such as the search feature.

- [JSON](https://www.json.org/json-en.html)

  - The project uses **JSON** for storing the list of products for the search feature.

- [JQuery](https://jquery.com/)

  - The project uses **JQuery** to simplify DOM manipulation.

- [FontAwesome](https://fontawesome.com)

  - The project uses **FontAwesome** for all of the icons used in the website.

- [Google Maps API](https://developers.google.com/maps/documentation)

  - The project uses the **Google Maps API** to initialise and render a map for the user on the 'About Us' page of the website.

- [EmailJS API](https://www.emailjs.com/)

  - The project uses the **EmailJS API** to send a email to the company on behalf of the user on the 'Contact Us' page.

- [IP Stack API](https://ipstack.com/)

  - The project uses the **IP Stack API** to automatically determine where the user is from based on their IP Address and redirect them to the relevant language version of the website.

## Testing

The documentation of all the testing can be found [here](TESTING.md).

## Deployment

### GitHub Pages

To deploy the project on GitHub Pages I had to follow these steps:

1. I had to create a new repository on my GitHub profile following this naming convention: username.reponame.github.io.
2. Either using GitHub Desktop or the command line, I had to clone the repository to my computer.
3. I then had to add all of the files from the original CottonBox repository into the GitHub Pages version.
4. I then had to commit the chnages and then push to the master branch.
5. I then went to roymagnussen.cottonbox.github.io and saw that the website is live.

### Locally

To run the project locally on your windows computer follow these steps:

1. In the GitHub page for this repository press the button that says 'Clone or download'. A dropdown should appear.
2. Press the button that says 'Download ZIP'.
3. Once the download is complete, open the ZIP file. Inside the folder there will be another folder called 'CottonBox-master'.
4. Open the folder, and at the top of the file explorer there will be a tab called 'Compressed Folder Tools'.
5. Press on that tab and there will be an option to 'Extract all'.
6. Press this option and a dialog will appear asking you where would you like to extract the contents to.
7. Select your destination of choice.
8. There is also an option to open the folder once it has been extracted. I personally leave that enabled, but it's personal preference.
9. Press the button called 'Extract'. Once done, the uncompressed folder will open.
10. Open the folder and double click on the file called 'index.html'.
11. It will then open in your browser of choice.

## Credits

### Media

- The photos used in this project were obtained from Ema Ding the owner of Cotton Box with express permission to use them for this project.

### Acknowledgements

- I received inspiration for this project from [Primark](https://www.primark.com) and [Quiz](https://quizclothing.co.uk).
