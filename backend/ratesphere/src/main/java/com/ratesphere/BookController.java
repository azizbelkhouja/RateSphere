package com.ratesphere;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/books")
@CrossOrigin(origins = "*")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public ResponseEntity<List<Book>> allBooks() {
        return new ResponseEntity<List<Book>>(bookService.allBooks(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<?> getSingleBook(@PathVariable String imdbId) {
        Optional<Book> book = bookService.singleBook(imdbId);
        if (book.isPresent()) {
            return ResponseEntity.ok(book);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Book not found with IMDb ID: " + imdbId);
        }
    }


}
