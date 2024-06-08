def create_webpage():
    # Create a webpage using HTML/CSS
    webpage = """
    <html>
    <head>
    <style>
    /* CSS styles for the webpage */
    body {
        background-color: lightblue;
        font-family: Arial, sans-serif;
    }
    h1 {
        color: darkblue;
        text-align: center;
    }
    p {
        color: black;
        font-size: 16px;
        margin: 10px;
    }
    </style>
    </head>
    <body>
    <h1>Welcome to My Webpage</h1>
    <p>This is an example webpage created using HTML and CSS.</p>
    </body>
    </html>
    """

    return webpage

def create_button(text="Click me", onclick=""):
    # Create a button using HTML/CSS
    button = """
    <button onclick="{onclick}">{text}</button>
    """.format(onclick=onclick, text=text)

    return button
