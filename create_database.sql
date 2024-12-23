CREATE TABLE Genres (
    Genre VARCHAR(50) PRIMARY KEY
);

CREATE TABLE Movie (
    MovieID INT PRIMARY KEY,
    MovieName VARCHAR(255) NOT NULL,
    ReleaseYear INT,
    Genre VARCHAR(255),
    Tag VARCHAR(255),
    Review INT,
    FOREIGN KEY (Genre) REFERENCES Genres(Genre)
);

CREATE TABLE UserAcc (
    UserID INT PRIMARY KEY,
    Username VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(50) NOT NULL,
    YearOfBirth INT,
    FavoriteMovie INT, 
    FOREIGN KEY (FavoriteMovie) REFERENCES FavoriteMovie(FavoriteID)
);

CREATE TABLE Review (
    ReviewID INT PRIMARY KEY,
    Username VARCHAR(50),
    Stars INT CHECK (Stars >= 1 AND Stars <= 5),
    Text TEXT,
    MovieID INT,
    FOREIGN KEY (MovieID) REFERENCES Movie(MovieID)
);

CREATE TABLE FavoriteMovie (
    FavoriteID INT PRIMARY KEY,
    MovieID INT,
    FOREIGN KEY (MovieID) REFERENCES Movie(MovieID)
);