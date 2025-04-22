# Ryan Sparks' GymOwners assessment

Here is my submission to GymOwners for my application process. I created this application using Vite and used npm for installing dependencies.

## Installation

Run `npm install` to install all needed dependencies. I did not use many outside dependencies, but things like Typescript, Vite, and Zustand are needing installation.

## Design

The instructions described this as a small component, so I chose to not build out an entire page of styling, but rather a component that could in theory be dropped into an application.
I added a background color simply to make it more visually appealilng.

## Functionality

Although a small demonstration, I wanted to set up this code for scalability. I chose to use Zustand for global state management instead of passing props around or managing a bunch of local state. There isn't a ton of data sharing between components, but this allowed the components to be very slim and easy to understand.

For the search filters, I made sure they both function with each other. You're able to select a role filter while also typing in the search field, although there isn't a ton of data to see this with. 

I used a standard html table for displaying the data. I kept the length of it dynamic so if in theory more data were to arrive, the table and all search functionality would scale with it. The only manual change needed would be if another role was added as I created a typescript type defining those.

For fetching the mock data, I set it up to appear as much like a real API call as possible. I added a small delay for fetching data, added a URL and (basic) error handling.