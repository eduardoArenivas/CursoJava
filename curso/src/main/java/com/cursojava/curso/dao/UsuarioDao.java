package com.cursojava.curso.dao;

import com.cursojava.curso.models.Usuario;
import net.bytebuddy.dynamic.loading.ClassInjector;

import java.util.List;

public interface UsuarioDao {
    List<Usuario> getUsuarios();

    void eliminar(Long id);

    void registrar(Usuario usuario);

    Usuario obtenerUsuarioPorCredenciales(Usuario usuario);
}
