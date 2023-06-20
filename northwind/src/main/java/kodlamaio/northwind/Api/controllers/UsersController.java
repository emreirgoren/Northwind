package kodlamaio.northwind.Api.controllers;

import kodlamaio.northwind.Business.abstracts.UserService;
import kodlamaio.northwind.Core.entities.User;
import kodlamaio.northwind.Core.utilities.results.Result;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    private UserService userService;

    public UsersController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public ResponseEntity<Result> add(@RequestBody User user){
        return ResponseEntity.ok(this.userService.add(user));
    }



}
