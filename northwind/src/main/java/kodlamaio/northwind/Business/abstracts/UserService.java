package kodlamaio.northwind.Business.abstracts;


import kodlamaio.northwind.Core.entities.User;
import kodlamaio.northwind.Core.utilities.results.DataResult;
import kodlamaio.northwind.Core.utilities.results.Result;

public interface UserService {

    Result add(User user);

    DataResult<User> findByEmail(String email);

}
