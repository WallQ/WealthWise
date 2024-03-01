package dev.sergiofelix.wealthwise.User;

import java.util.List;
import java.util.UUID;

public interface UserService {
    List<UserDto> getAllUsers();

    UserDto getUserById(UUID id);

    UserDto createUser(User user);

    UserDto updateUser(UUID id, User user);

    UserDto deleteUser(UUID id);
}