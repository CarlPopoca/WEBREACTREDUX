﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using WEBAPICORE_2._2_USUARIOS.Models;

namespace WEBAPICORE_2._2_USUARIOS.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;
        public UsuariosController(UserManager<IdentityUser> userManager,
                        SignInManager<IdentityUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // POST: api/Usuarios/Ingresar
        [HttpPost]
        public async Task<ActionResult<LoginViewModel>> Ingresar(LoginViewModel loginViewModel)
        {
            var result = await signInManager.PasswordSignInAsync(loginViewModel.Email, loginViewModel.Password, false, false);
            if (!result.Succeeded)
            {
                return NotFound();
            }
            return new LoginViewModel
            {
                Email = loginViewModel.Email,
                Password = loginViewModel.Password
              
            };

        }

        // POST: api/Usuarios/Registrar
       [HttpPost]
        public async Task<ActionResult<UsuariosViewModel>> Registrar(UsuariosViewModel usuariosViewModel)
        {
            var user = new IdentityUser
            {
                UserName = usuariosViewModel.Email,
                Email = usuariosViewModel.Email
            };

            var result = await userManager.CreateAsync(user, usuariosViewModel.Password);
            if (!result.Succeeded)
            {
                return BadRequest();
            }
            return new UsuariosViewModel
            {
                Email = usuariosViewModel.Email,
                Password = usuariosViewModel.Password,
                ConfirmPassword  = usuariosViewModel.ConfirmPassword
            };
        }

        // POST: api/Usuarios/CerrarSesion
        [HttpPost]
        public async Task<IActionResult> CerrarSesion()
        {
            await signInManager.SignOutAsync();
            return NoContent();
        }
        
    }
}
