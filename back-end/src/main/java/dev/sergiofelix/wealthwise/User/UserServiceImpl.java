package dev.sergiofelix.wealthwise.User;

import dev.sergiofelix.wealthwise.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(UserMapper::mapToUserDto).collect(Collectors.toList());
    }

    public UserDto getUserById(UUID id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User with id " + id + " was not found!"));
        return UserMapper.mapToUserDto(user);
    }

    public UserDto createUser(User user) {
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

    public UserDto updateUser(UUID id, User user) {
        User updatedUser = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User with id " + id + " was not found!"));

        if (user.getFirstName() != null) updatedUser.setFirstName(user.getFirstName());
        if (user.getLastName() != null) updatedUser.setLastName(user.getLastName());
        if (user.getEmail() != null) updatedUser.setEmail(user.getEmail());
        if (user.getPassword() != null) updatedUser.setPassword(user.getPassword());
        if (user.getRole() != null) updatedUser.setRole(user.getRole());

        userRepository.save(updatedUser);
        return UserMapper.mapToUserDto(updatedUser);
    }

    public UserDto deleteUser(UUID id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User with id " + id + " was not found!"));
        userRepository.delete(user);
        return UserMapper.mapToUserDto(user);
    }
}
