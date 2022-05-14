USE [master]
GO
/****** Object:  Database [parqueos]    Script Date: 14/5/2022 01:06:30 ******/
CREATE DATABASE [parqueos]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'parqueos', FILENAME = N'C:\development\basedata\parqueos\parqueos.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'parqueos_log', FILENAME = N'C:\development\basedata\parqueos\parqueos_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [parqueos] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [parqueos].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [parqueos] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [parqueos] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [parqueos] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [parqueos] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [parqueos] SET ARITHABORT OFF 
GO
ALTER DATABASE [parqueos] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [parqueos] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [parqueos] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [parqueos] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [parqueos] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [parqueos] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [parqueos] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [parqueos] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [parqueos] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [parqueos] SET  DISABLE_BROKER 
GO
ALTER DATABASE [parqueos] SET AUTO_UPDATE_STATISTICS_ASYNC ON 
GO
ALTER DATABASE [parqueos] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [parqueos] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [parqueos] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [parqueos] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [parqueos] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [parqueos] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [parqueos] SET RECOVERY FULL 
GO
ALTER DATABASE [parqueos] SET  MULTI_USER 
GO
ALTER DATABASE [parqueos] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [parqueos] SET DB_CHAINING OFF 
GO
ALTER DATABASE [parqueos] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [parqueos] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [parqueos] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [parqueos] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'parqueos', N'ON'
GO
ALTER DATABASE [parqueos] SET QUERY_STORE = OFF
GO
USE [parqueos]
GO
/****** Object:  Table [dbo].[Cantones]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cantones](
	[cantonId] [smallint] IDENTITY(1,1) NOT NULL,
	[provinciaId] [tinyint] NOT NULL,
	[canton] [nvarchar](120) NOT NULL,
 CONSTRAINT [PK_Cantones] PRIMARY KEY CLUSTERED 
(
	[cantonId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Dias]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dias](
	[diaId] [tinyint] IDENTITY(1,1) NOT NULL,
	[dia] [nvarchar](40) NOT NULL,
 CONSTRAINT [PK_Dias] PRIMARY KEY CLUSTERED 
(
	[diaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Distritos]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Distritos](
	[distritoId] [int] IDENTITY(1,1) NOT NULL,
	[provinciaId] [tinyint] NOT NULL,
	[cantonId] [smallint] NOT NULL,
	[distrito] [nvarchar](120) NOT NULL,
 CONSTRAINT [PK_Distritos] PRIMARY KEY CLUSTERED 
(
	[distritoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Divisiones]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Divisiones](
	[divisionId] [int] IDENTITY(1,1) NOT NULL,
	[codigoDivision] [nvarchar](8) NOT NULL,
	[descripcion] [nvarchar](60) NOT NULL,
 CONSTRAINT [PK_Divisiones] PRIMARY KEY CLUSTERED 
(
	[divisionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Espacios_Estacionamientos]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Espacios_Estacionamientos](
	[espacioId] [bigint] IDENTITY(1,1) NOT NULL,
	[estacionamientoId] [int] NOT NULL,
	[numero] [int] NOT NULL,
	[tipo] [tinyint] NOT NULL,
	[descripcion] [nvarchar](250) NULL,
	[deshabilitado] [bit] NOT NULL,
 CONSTRAINT [PK_Espacios_Estacionamientos] PRIMARY KEY CLUSTERED 
(
	[espacioId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Estacionamientos]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Estacionamientos](
	[estacionamientoId] [int] IDENTITY(1,1) NOT NULL,
	[tipoEstacionamiento] [smallint] NULL,
	[deshabilitado] [bit] NOT NULL,
	[ubicacion] [bigint] NULL,
	[nombre] [nvarchar](200) NOT NULL,
	[formaAcceso] [nvarchar](500) NOT NULL,
	[cantEspacios] [int] NOT NULL,
	[cantEspaciosEspeciales] [int] NULL,
	[cantEspaciosJefaturas] [int] NULL,
	[cantEspaciosVisitantes] [int] NULL,
	[cantEspaciosOficiales] [int] NULL,
	[correo] [nvarchar](200) NULL,
	[telefono] [nvarchar](40) NULL,
	[identificacion] [nvarchar](60) NULL,
	[imageUrl] [nvarchar](800) NULL,
	[descripcion] [nvarchar](250) NULL,
 CONSTRAINT [PK_Estacionamientos] PRIMARY KEY CLUSTERED 
(
	[estacionamientoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Horarios]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Horarios](
	[horarioId] [bigint] IDENTITY(1,1) NOT NULL,
	[diaSemana] [tinyint] NOT NULL,
	[horaInicio] [time](7) NOT NULL,
	[horaFinal] [time](7) NOT NULL,
 CONSTRAINT [PK_Horarios] PRIMARY KEY CLUSTERED 
(
	[horarioId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Horarios_Por_Estacionamiento]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Horarios_Por_Estacionamiento](
	[estacionamientoId] [int] NOT NULL,
	[horarioId] [bigint] NOT NULL,
	[deshabilitado] [bit] NOT NULL,
	[checksum] [varbinary](256) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Horarios_Por_Usuario]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Horarios_Por_Usuario](
	[usuarioId] [bigint] NOT NULL,
	[horarioId] [bigint] NOT NULL,
	[deshabilitado] [bit] NOT NULL,
	[checksum] [varbinary](256) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Permisos_Por_Usuario]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Permisos_Por_Usuario](
	[permisoUsuarioId] [int] NOT NULL,
	[usuarioId] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PermisosUsuario]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PermisosUsuario](
	[permisoUsuarioId] [int] IDENTITY(1,1) NOT NULL,
	[permiso] [nvarchar](60) NULL,
 CONSTRAINT [PK_PermisosUsuario] PRIMARY KEY CLUSTERED 
(
	[permisoUsuarioId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Provincias]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Provincias](
	[provinciaId] [tinyint] IDENTITY(1,1) NOT NULL,
	[provincia] [nvarchar](60) NOT NULL,
 CONSTRAINT [PK_Provincias] PRIMARY KEY CLUSTERED 
(
	[provinciaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reservaciones]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reservaciones](
	[reservacionId] [bigint] IDENTITY(1,1) NOT NULL,
	[usuarioId] [bigint] NOT NULL,
	[estacionamientoId] [int] NOT NULL,
	[espacioId] [bigint] NULL,
	[horaInicio] [datetime] NOT NULL,
	[horaFinal] [datetime] NOT NULL,
	[timestamp] [datetime] NOT NULL,
	[ipAddress] [nvarchar](60) NULL,
	[checksum] [varbinary](256) NOT NULL,
	[deshabilitado] [bit] NOT NULL,
	[recurrente] [bit] NOT NULL,
 CONSTRAINT [PK_Reservaciones] PRIMARY KEY CLUSTERED 
(
	[reservacionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sys_Logs]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sys_Logs](
	[logId] [bigint] NOT NULL,
	[posttime] [datetime] NOT NULL,
	[description] [nvarchar](256) NOT NULL,
	[username] [nvarchar](120) NOT NULL,
	[checksum] [nvarchar](256) NOT NULL,
	[ipAddress] [varbinary](32) NULL,
 CONSTRAINT [PK_Sys_Logs] PRIMARY KEY CLUSTERED 
(
	[logId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tipos_Espacios]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tipos_Espacios](
	[tipoEspacioId] [tinyint] IDENTITY(1,1) NOT NULL,
	[tipo] [nvarchar](60) NULL,
 CONSTRAINT [PK_Tipos_Espacios] PRIMARY KEY CLUSTERED 
(
	[tipoEspacioId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TiposEstacionamientos]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TiposEstacionamientos](
	[tipoEstacionamientoId] [smallint] IDENTITY(1,1) NOT NULL,
	[tipo] [nvarchar](60) NOT NULL,
	[imageUrl] [nvarchar](128) NULL,
 CONSTRAINT [PK_TiposEstacionamientos] PRIMARY KEY CLUSTERED 
(
	[tipoEstacionamientoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TiposFuncionarios]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TiposFuncionarios](
	[tipoFuncionarioId] [int] IDENTITY(1,1) NOT NULL,
	[tipoFuncionario] [nvarchar](60) NOT NULL,
 CONSTRAINT [PK_TiposUsuarios] PRIMARY KEY CLUSTERED 
(
	[tipoFuncionarioId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipoVehiculo]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipoVehiculo](
	[tipoVehiculoId] [smallint] IDENTITY(1,1) NOT NULL,
	[tipo] [nvarchar](60) NOT NULL,
 CONSTRAINT [PK_tipoVehiculo] PRIMARY KEY CLUSTERED 
(
	[tipoVehiculoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Ubicaciones]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ubicaciones](
	[ubicacionId] [bigint] IDENTITY(1,1) NOT NULL,
	[provincia] [tinyint] NULL,
	[canton] [smallint] NULL,
	[distrito] [int] NOT NULL,
	[direccionExacta] [nvarchar](500) NOT NULL,
	[latitud] [geography] NULL,
	[longitud] [geography] NULL,
	[checksum] [varbinary](256) NULL,
 CONSTRAINT [PK_Ubicaciones] PRIMARY KEY CLUSTERED 
(
	[ubicacionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[usuarioId] [bigint] IDENTITY(1,1) NOT NULL,
	[tipoFuncionario] [int] NULL,
	[division] [int] NULL,
	[identificacion] [nvarchar](60) NOT NULL,
	[nombre] [nvarchar](60) NOT NULL,
	[apellido1] [nvarchar](60) NOT NULL,
	[apellido2] [nvarchar](60) NOT NULL,
	[telefono] [nvarchar](40) NOT NULL,
	[correoInstitucional] [nvarchar](200) NULL,
	[correo] [nvarchar](200) NULL,
	[notificarCorreoAlterno] [bit] NULL,
	[deshabilitado] [bit] NOT NULL,
	[password] [varbinary](256) NOT NULL,
	[checksum] [varbinary](256) NULL,
	[profilePhotoUrl] [nvarchar](128) NULL,
	[esAdministrador] [bit] NULL,
 CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED 
(
	[usuarioId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vehiculos]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vehiculos](
	[vehiculoId] [bigint] IDENTITY(1,1) NOT NULL,
	[placa] [nvarchar](20) NOT NULL,
	[tipoVehiculo] [smallint] NOT NULL,
	[deshabilitado] [bit] NOT NULL,
 CONSTRAINT [PK_Vehiculos] PRIMARY KEY CLUSTERED 
(
	[vehiculoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vehiculos_Por_Usuario]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vehiculos_Por_Usuario](
	[usuarioId] [bigint] NOT NULL,
	[vehiculoId] [bigint] NOT NULL,
	[deshabilitado] [bit] NOT NULL,
	[timestamp] [datetime] NULL,
	[checksum] [nvarchar](256) NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Espacios_Estacionamientos] ADD  CONSTRAINT [DF_Espacios_Estacionamientos_esEspecial]  DEFAULT ((0)) FOR [tipo]
GO
ALTER TABLE [dbo].[Espacios_Estacionamientos] ADD  CONSTRAINT [DF_Espacios_Estacionamientos_deshabilitado]  DEFAULT ((0)) FOR [deshabilitado]
GO
ALTER TABLE [dbo].[Estacionamientos] ADD  CONSTRAINT [DF_Estacionamientos_deshabilitado]  DEFAULT ((0)) FOR [deshabilitado]
GO
ALTER TABLE [dbo].[Horarios_Por_Estacionamiento] ADD  CONSTRAINT [DF_Horarios_Por_Estacionamiento_deshabilitado]  DEFAULT ((0)) FOR [deshabilitado]
GO
ALTER TABLE [dbo].[Horarios_Por_Usuario] ADD  CONSTRAINT [DF_Horarios_Por_Usuario_deshabilitado]  DEFAULT ((0)) FOR [deshabilitado]
GO
ALTER TABLE [dbo].[Reservaciones] ADD  CONSTRAINT [DF_Reservaciones_deshabilitado]  DEFAULT ((0)) FOR [deshabilitado]
GO
ALTER TABLE [dbo].[Reservaciones] ADD  CONSTRAINT [DF_Reservaciones_recurrente]  DEFAULT ((0)) FOR [recurrente]
GO
ALTER TABLE [dbo].[Usuarios] ADD  CONSTRAINT [DF_Usuarios_notificarCorreoAlterno]  DEFAULT ((0)) FOR [notificarCorreoAlterno]
GO
ALTER TABLE [dbo].[Usuarios] ADD  CONSTRAINT [DF_Usuarios_estaInactivo]  DEFAULT ((0)) FOR [deshabilitado]
GO
ALTER TABLE [dbo].[Usuarios] ADD  CONSTRAINT [DF_Usuarios_esAdministrador]  DEFAULT ((0)) FOR [esAdministrador]
GO
ALTER TABLE [dbo].[Vehiculos] ADD  CONSTRAINT [DF_Vehiculos_deshabilitado]  DEFAULT ((0)) FOR [deshabilitado]
GO
ALTER TABLE [dbo].[Vehiculos_Por_Usuario] ADD  CONSTRAINT [DF_Vehiculos_Por_Usuario_deshabilitado]  DEFAULT ((0)) FOR [deshabilitado]
GO
ALTER TABLE [dbo].[Cantones]  WITH CHECK ADD  CONSTRAINT [FK_Cantones_Provincias_provinciaId] FOREIGN KEY([provinciaId])
REFERENCES [dbo].[Provincias] ([provinciaId])
GO
ALTER TABLE [dbo].[Cantones] CHECK CONSTRAINT [FK_Cantones_Provincias_provinciaId]
GO
ALTER TABLE [dbo].[Distritos]  WITH CHECK ADD  CONSTRAINT [FK_Distritos_Cantones_cantonId] FOREIGN KEY([cantonId])
REFERENCES [dbo].[Cantones] ([cantonId])
GO
ALTER TABLE [dbo].[Distritos] CHECK CONSTRAINT [FK_Distritos_Cantones_cantonId]
GO
ALTER TABLE [dbo].[Distritos]  WITH CHECK ADD  CONSTRAINT [FK_Distritos_Provincias_provinciaId] FOREIGN KEY([provinciaId])
REFERENCES [dbo].[Provincias] ([provinciaId])
GO
ALTER TABLE [dbo].[Distritos] CHECK CONSTRAINT [FK_Distritos_Provincias_provinciaId]
GO
ALTER TABLE [dbo].[Espacios_Estacionamientos]  WITH CHECK ADD  CONSTRAINT [FK_Espacios_Estacionamientos_Estacionamientos_estacionamientoId] FOREIGN KEY([estacionamientoId])
REFERENCES [dbo].[Estacionamientos] ([estacionamientoId])
GO
ALTER TABLE [dbo].[Espacios_Estacionamientos] CHECK CONSTRAINT [FK_Espacios_Estacionamientos_Estacionamientos_estacionamientoId]
GO
ALTER TABLE [dbo].[Espacios_Estacionamientos]  WITH CHECK ADD  CONSTRAINT [FK_Espacios_Estacionamientos_Tipos_Espacios_tipoEspacioId] FOREIGN KEY([tipo])
REFERENCES [dbo].[Tipos_Espacios] ([tipoEspacioId])
GO
ALTER TABLE [dbo].[Espacios_Estacionamientos] CHECK CONSTRAINT [FK_Espacios_Estacionamientos_Tipos_Espacios_tipoEspacioId]
GO
ALTER TABLE [dbo].[Estacionamientos]  WITH CHECK ADD  CONSTRAINT [FK_Estacionamientos_TiposEstacionamientos_tipoEstacionamientoId] FOREIGN KEY([tipoEstacionamiento])
REFERENCES [dbo].[TiposEstacionamientos] ([tipoEstacionamientoId])
GO
ALTER TABLE [dbo].[Estacionamientos] CHECK CONSTRAINT [FK_Estacionamientos_TiposEstacionamientos_tipoEstacionamientoId]
GO
ALTER TABLE [dbo].[Estacionamientos]  WITH CHECK ADD  CONSTRAINT [FK_Estacionamientos_Ubicaciones_ubicacion] FOREIGN KEY([ubicacion])
REFERENCES [dbo].[Ubicaciones] ([ubicacionId])
GO
ALTER TABLE [dbo].[Estacionamientos] CHECK CONSTRAINT [FK_Estacionamientos_Ubicaciones_ubicacion]
GO
ALTER TABLE [dbo].[Horarios]  WITH CHECK ADD  CONSTRAINT [FK_Horarios_Dias_diaSemana] FOREIGN KEY([diaSemana])
REFERENCES [dbo].[Dias] ([diaId])
GO
ALTER TABLE [dbo].[Horarios] CHECK CONSTRAINT [FK_Horarios_Dias_diaSemana]
GO
ALTER TABLE [dbo].[Horarios_Por_Estacionamiento]  WITH CHECK ADD  CONSTRAINT [FK_Horarios_Estacionamiento_horarioId] FOREIGN KEY([horarioId])
REFERENCES [dbo].[Horarios] ([horarioId])
GO
ALTER TABLE [dbo].[Horarios_Por_Estacionamiento] CHECK CONSTRAINT [FK_Horarios_Estacionamiento_horarioId]
GO
ALTER TABLE [dbo].[Horarios_Por_Estacionamiento]  WITH CHECK ADD  CONSTRAINT [FK_Horarios_Estacionamientos_estacionamientoId] FOREIGN KEY([estacionamientoId])
REFERENCES [dbo].[Estacionamientos] ([estacionamientoId])
GO
ALTER TABLE [dbo].[Horarios_Por_Estacionamiento] CHECK CONSTRAINT [FK_Horarios_Estacionamientos_estacionamientoId]
GO
ALTER TABLE [dbo].[Horarios_Por_Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Horarios_Por_Usuario_horarioId] FOREIGN KEY([horarioId])
REFERENCES [dbo].[Horarios] ([horarioId])
GO
ALTER TABLE [dbo].[Horarios_Por_Usuario] CHECK CONSTRAINT [FK_Horarios_Por_Usuario_horarioId]
GO
ALTER TABLE [dbo].[Horarios_Por_Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Horarios_Por_Usuario_usuarioId] FOREIGN KEY([usuarioId])
REFERENCES [dbo].[Usuarios] ([usuarioId])
GO
ALTER TABLE [dbo].[Horarios_Por_Usuario] CHECK CONSTRAINT [FK_Horarios_Por_Usuario_usuarioId]
GO
ALTER TABLE [dbo].[Permisos_Por_Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Permisos_Por_Usuario_PermisosUsuario_permisoUsuarioId] FOREIGN KEY([permisoUsuarioId])
REFERENCES [dbo].[PermisosUsuario] ([permisoUsuarioId])
GO
ALTER TABLE [dbo].[Permisos_Por_Usuario] CHECK CONSTRAINT [FK_Permisos_Por_Usuario_PermisosUsuario_permisoUsuarioId]
GO
ALTER TABLE [dbo].[Permisos_Por_Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Permisos_Por_Usuario_Usuarios_usuarioId] FOREIGN KEY([usuarioId])
REFERENCES [dbo].[Usuarios] ([usuarioId])
GO
ALTER TABLE [dbo].[Permisos_Por_Usuario] CHECK CONSTRAINT [FK_Permisos_Por_Usuario_Usuarios_usuarioId]
GO
ALTER TABLE [dbo].[Reservaciones]  WITH CHECK ADD  CONSTRAINT [FK_Reservaciones_Espacios_Estacionamientos_espacioId] FOREIGN KEY([espacioId])
REFERENCES [dbo].[Espacios_Estacionamientos] ([espacioId])
GO
ALTER TABLE [dbo].[Reservaciones] CHECK CONSTRAINT [FK_Reservaciones_Espacios_Estacionamientos_espacioId]
GO
ALTER TABLE [dbo].[Reservaciones]  WITH CHECK ADD  CONSTRAINT [FK_Reservaciones_Estacionamientos_estacionamientoId] FOREIGN KEY([estacionamientoId])
REFERENCES [dbo].[Estacionamientos] ([estacionamientoId])
GO
ALTER TABLE [dbo].[Reservaciones] CHECK CONSTRAINT [FK_Reservaciones_Estacionamientos_estacionamientoId]
GO
ALTER TABLE [dbo].[Reservaciones]  WITH CHECK ADD  CONSTRAINT [FK_Reservaciones_Usuarios_usuarioId] FOREIGN KEY([usuarioId])
REFERENCES [dbo].[Usuarios] ([usuarioId])
GO
ALTER TABLE [dbo].[Reservaciones] CHECK CONSTRAINT [FK_Reservaciones_Usuarios_usuarioId]
GO
ALTER TABLE [dbo].[Ubicaciones]  WITH CHECK ADD  CONSTRAINT [FK_Ubicaciones_Cantones_cantonId] FOREIGN KEY([canton])
REFERENCES [dbo].[Cantones] ([cantonId])
GO
ALTER TABLE [dbo].[Ubicaciones] CHECK CONSTRAINT [FK_Ubicaciones_Cantones_cantonId]
GO
ALTER TABLE [dbo].[Ubicaciones]  WITH CHECK ADD  CONSTRAINT [FK_Ubicaciones_Distritos_distritoId] FOREIGN KEY([distrito])
REFERENCES [dbo].[Distritos] ([distritoId])
GO
ALTER TABLE [dbo].[Ubicaciones] CHECK CONSTRAINT [FK_Ubicaciones_Distritos_distritoId]
GO
ALTER TABLE [dbo].[Ubicaciones]  WITH CHECK ADD  CONSTRAINT [FK_Ubicaciones_Provincias_provinciaId] FOREIGN KEY([provincia])
REFERENCES [dbo].[Provincias] ([provinciaId])
GO
ALTER TABLE [dbo].[Ubicaciones] CHECK CONSTRAINT [FK_Ubicaciones_Provincias_provinciaId]
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD  CONSTRAINT [FK_Usuarios_Divisiones_divisionId] FOREIGN KEY([division])
REFERENCES [dbo].[Divisiones] ([divisionId])
GO
ALTER TABLE [dbo].[Usuarios] CHECK CONSTRAINT [FK_Usuarios_Divisiones_divisionId]
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD  CONSTRAINT [FK_Usuarios_TiposFuncionarios_tipoFuncionarioId] FOREIGN KEY([tipoFuncionario])
REFERENCES [dbo].[TiposFuncionarios] ([tipoFuncionarioId])
GO
ALTER TABLE [dbo].[Usuarios] CHECK CONSTRAINT [FK_Usuarios_TiposFuncionarios_tipoFuncionarioId]
GO
ALTER TABLE [dbo].[Vehiculos]  WITH CHECK ADD  CONSTRAINT [FK_Vehiculos_tipoVehiculo_tipoVehiculoId] FOREIGN KEY([tipoVehiculo])
REFERENCES [dbo].[tipoVehiculo] ([tipoVehiculoId])
GO
ALTER TABLE [dbo].[Vehiculos] CHECK CONSTRAINT [FK_Vehiculos_tipoVehiculo_tipoVehiculoId]
GO
ALTER TABLE [dbo].[Vehiculos_Por_Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Vehiculos_Por_Usuario_usuarioId] FOREIGN KEY([usuarioId])
REFERENCES [dbo].[Usuarios] ([usuarioId])
GO
ALTER TABLE [dbo].[Vehiculos_Por_Usuario] CHECK CONSTRAINT [FK_Vehiculos_Por_Usuario_usuarioId]
GO
ALTER TABLE [dbo].[Vehiculos_Por_Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Vehiculos_Por_Usuario_Vehiculos_vehiculoId] FOREIGN KEY([vehiculoId])
REFERENCES [dbo].[Vehiculos] ([vehiculoId])
GO
ALTER TABLE [dbo].[Vehiculos_Por_Usuario] CHECK CONSTRAINT [FK_Vehiculos_Por_Usuario_Vehiculos_vehiculoId]
GO
/****** Object:  StoredProcedure [dbo].[deshabilitarEstacionamiento]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[deshabilitarEstacionamiento]	
	@estacionamientoId nvarchar(60)
AS
	UPDATE dbo.Estacionamientos SET deshabilitado = 1 WHERE estacionamientoId = @estacionamientoId
	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[deshabilitarUsuario]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[deshabilitarUsuario]	
	@usuarioId BIGINT
AS
	UPDATE dbo.Usuarios SET deshabilitado = 1 WHERE usuarioId = @usuarioId
	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[Registrar_Horario]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Registrar_Horario]
	@usuarioId bigint,
	@diaSemana tinyint,					-- parametros
	@horaInicio time(7),
	@horaFinal time(7)
AS

	DECLARE @registradoComo INT	= 0					-- busca si ya el horario esta registrada
	SELECT @registradoComo = horarioId FROM dbo.Horarios WHERE diaSemana = @diaSemana AND horaInicio = @horaInicio AND horaFinal = @horaFinal;

	DECLARE @yaAsociado BIT = 0
	SELECT @yaAsociado=1 FROM dbo.Horarios_Por_Usuario WHERE usuarioId = @usuarioId AND horarioId = @registradoComo AND deshabilitado = 0

	IF @yaAsociado=1 BEGIN
		RETURN 0					-- Si ya el usuario tenia ese carro, entonces no sigue el registro
	END

	IF @registradoComo<1 BEGIN						-- si no esta resgistrada, lo inserta mediante transaccion
		BEGIN TRANSACTION
			INSERT INTO dbo.Horarios(diaSemana, horaInicio, horaFinal)
			VALUES
			(@diaSemana, @horaInicio, @horaFinal)
		COMMIT
		SELECT @registradoComo = MAX(horarioId) FROM dbo.Horarios
	END
																	-- asocia al usuario con el horario
	BEGIN TRANSACTION												-- para este punto el @registradoComo tiene el id del horario lo haya encontrado o creado
		INSERT INTO dbo.Horarios_Por_Usuario (usuarioId, horarioId)
		VALUES
		(@usuarioId, @registradoComo)
	COMMIT

GO
/****** Object:  StoredProcedure [dbo].[sp_estacionamientoinfo]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_estacionamientoinfo] 
	@estacionamientoId INT
AS
	SELECT nombre, descripcion, direccionExacta, formaAcceso, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosOficiales, cantEspaciosVisitantes, imageUrl
	FROM dbo.Estacionamientos e INNER JOIN dbo.Ubicaciones u ON e.ubicacion = u.ubicacionId WHERE estacionamientoId = @estacionamientoId  AND deshabilitado = 0 FOR JSON PATH
	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_estacionamientosTipoSubcontratados]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_estacionamientosTipoSubcontratados]
	@subcontratados BIT
AS
	IF @subcontratados = 1 BEGIN
		--subcontratados
		SELECT estacionamientoId, nombre, espaciosTotales = cantEspacios+cantEspaciosEspeciales+cantEspaciosJefaturas+cantEspaciosVisitantes+cantEspaciosOficiales, telefono, imageUrl FROM dbo.Estacionamientos
		WHERE tipoEstacionamiento = 2 FOR JSON PATH

	END ELSE BEGIN
		--institucionales
		SELECT estacionamientoId, nombre, espaciosTotales = cantEspacios+cantEspaciosEspeciales+cantEspaciosJefaturas+cantEspaciosVisitantes+cantEspaciosOficiales, telefono, imageUrl FROM dbo.Estacionamientos
		WHERE tipoEstacionamiento = 1 FOR JSON PATH

	END

GO
/****** Object:  StoredProcedure [dbo].[sp_guardarEditarEstacionamiento]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_guardarEditarEstacionamiento]
	@estacionamientoId int,
	@identificacion nvarchar(60),
	@nombre nvarchar(200),
	@correo nvarchar(200),
	@telefono nvarchar(40),
	@direccionExacta nvarchar(500),
	@formaAcceso nvarchar(500),
	@descripcion nvarchar(250),
	@cantEspaciosEspeciales int,
	@cantEspaciosJefaturas int,
	@cantEspaciosVisitantes int,
	@cantEspaciosOficiales int,
	@cantEspacios int,
	@imageUrl nvarchar(800),
	@lunesA time(7),
	@lunesB time(7),
	@martesA time(7),
	@martesB time(7),
	@miercolesA time(7),
	@miercolesB time(7),
	@juevesA time(7),
	@juevesB time(7),
	@viernesA time(7),
	@viernesB time(7),
	@sabadoA time(7),
	@sabadoB time(7),
	@domingoA time(7),
	@domingoB time(7)
AS
	-- busqueda del Id del estacionamiento
	-- DECLARE @estacionamientoId INT
	-- SELECT @estacionamientoId = estacionamientoId FROM dbo.Estacionamientos WHERE identificacion = @identificacion

	-- busca y actualiza la direccionExacta
	DECLARE @laUbicacion BIGINT
	SELECT @laUbicacion = ubicacion FROM dbo.Estacionamientos WHERE identificacion = @identificacion OR estacionamientoId = @estacionamientoId

	UPDATE dbo.Ubicaciones SET direccionExacta = @direccionExacta WHERE ubicacionId = @laUbicacion

	-- actualiza informacion de la tabla de estacionamiento
	
	UPDATE dbo.Estacionamientos SET nombre = @nombre, correo= @correo, telefono = @telefono, formaAcceso = @formaAcceso, 
	descripcion = @descripcion, cantEspaciosEspeciales = @cantEspaciosEspeciales, cantEspaciosJefaturas = @cantEspaciosJefaturas, cantEspaciosVisitantes = @cantEspaciosVisitantes,
	cantEspaciosOficiales = @cantEspaciosOficiales, cantEspacios = @cantEspacios, imageUrl = @imageUrl
	WHERE identificacion = @identificacion OR estacionamientoId = @estacionamientoId

	-- actualizacion de los horarios

	IF @lunesA IS NOT NULL AND @lunesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 1, @lunesA, @lunesB
	END

	IF @martesA IS NOT NULL AND @martesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 2, @martesA, @martesB
	END

	IF @miercolesA IS NOT NULL AND @miercolesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 3, @miercolesA, @miercolesB
	END

	IF @juevesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 4, @juevesA, @juevesB
	END

	IF @viernesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 5, @viernesA, @viernesB
	END

	IF @sabadoA IS NOT NULL AND @sabadoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 6, @sabadoA, @sabadoB
	END

	IF @domingoA IS NOT NULL AND @domingoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @estacionamientoId, 7, @domingoA, @domingoB
	END

GO
/****** Object:  StoredProcedure [dbo].[sp_guardarEditarUsuario]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_guardarEditarUsuario]
	@usuarioId bigint,
	@correo nvarchar(200),
	@password nvarchar(200),
	@telefono nvarchar(40),
	@departamento nvarchar(8),
	@placa1 nvarchar(20),
	@placa2 nvarchar(20),
	@placa3 nvarchar(20),
	@placa4 nvarchar(20),
	@lunesA time(7),
	@lunesB time(7),
	@martesA time(7),
	@martesB time(7),
	@miercolesA time(7),
	@miercolesB time(7),
	@juevesA time(7),
	@juevesB time(7),
	@viernesA time(7),
	@viernesB time(7),
	@sabadoA time(7),
	@sabadoB time(7),
	@domingoA time(7),
	@domingoB time(7),
	@notificarCorreoAlterno bit
AS
	-- busqueda del Id de la division
	DECLARE @divisionId INT
	SELECT @divisionId = divisionId FROM dbo.Divisiones WHERE codigoDivision = @departamento OR descripcion = @departamento

	-- actualiza informacion de la tabla de usuario
	UPDATE dbo.Usuarios SET correo= @correo, [password]= HASHBYTES('SHA2_256', @password), telefono = @telefono, notificarCorreoAlterno = @notificarCorreoAlterno, division = @divisionId
	WHERE usuarioId = @usuarioId


	-- limpia las placas asociadas para poder insertar las nuevas

	UPDATE dbo.Vehiculos_Por_Usuario SET deshabilitado=1 WHERE usuarioId = @usuarioId

	-- busqueda o registro de las placas

	IF @placa1 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @usuarioId, @placa1, 1
	END

	IF @placa2 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @usuarioId, @placa2, 1
	END

	IF @placa3 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @usuarioId, @placa3, 1
	END

	IF @placa4 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @usuarioId, @placa4, 1
	END

	-- actualizacion de los horarios

	IF @lunesA IS NOT NULL AND @lunesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 1, @lunesA, @lunesB
	END

	IF @martesA IS NOT NULL AND @martesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 2, @martesA, @martesB
	END

	IF @miercolesA IS NOT NULL AND @miercolesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 3, @miercolesA, @miercolesB
	END

	IF @juevesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 4, @juevesA, @juevesB
	END

	IF @viernesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 5, @viernesA, @viernesB
	END

	IF @sabadoA IS NOT NULL AND @sabadoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 6, @sabadoA, @sabadoB
	END

	IF @domingoA IS NOT NULL AND @domingoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @usuarioId, 7, @domingoA, @domingoB
	END

GO
/****** Object:  StoredProcedure [dbo].[sp_informeEstacionamientos]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_informeEstacionamientos]
AS
	SELECT nombre, correo, telefono, descripcion, direccionExacta, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosOficiales, cantEspaciosVisitantes
	FROM dbo.Estacionamientos e INNER JOIN dbo.Ubicaciones u ON e.ubicacion = u.ubicacionId WHERE deshabilitado = 0 FOR JSON PATH
	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_informeFuncionarios]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_informeFuncionarios]

AS
	SELECT identificacion, apellido1, apellido2, nombre, correoInstitucional, telefono
	FROM dbo.Usuarios WHERE deshabilitado = 0 ORDER BY apellido1
	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_inicio]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_inicio]
AS
	SELECT estacionamientoId, nombre, espaciosTotales = cantEspacios+cantEspaciosEspeciales+cantEspaciosJefaturas+cantEspaciosVisitantes+cantEspaciosOficiales, telefono, imageUrl from dbo.Estacionamientos
	WHERE deshabilitado = 0 FOR JSON PATH
	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_InsertarHorario]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_InsertarHorario]
	@diaSemana tinyint,					-- parametros
	@horaInicio time(7),
	@horaFinal time(7)
AS

	DECLARE @registradoComo INT	= 0					-- busca si ya el horario esta registrado
	SELECT @registradoComo = horarioId FROM dbo.Horarios WHERE diaSemana = @diaSemana AND horaInicio = @horaInicio AND horaFinal = @horaFinal;

	IF @registradoComo<1 BEGIN						-- si no esta resgistrada, lo inserta mediante transaccion
		
		BEGIN TRANSACTION
			INSERT INTO dbo.Horarios(diaSemana, horaInicio, horaFinal)
			VALUES
			(@diaSemana, @horaInicio, @horaFinal)
		COMMIT
		SELECT @registradoComo = MAX(horarioId) FROM dbo.Horarios
	END

	RETURN @registradoComo

GO
/****** Object:  StoredProcedure [dbo].[sp_login]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_login]
	@user nvarchar(200),
	@pass nvarchar(200)
AS
	DECLARE @elUsuario INT = -1
	DECLARE @continue INT = 0
	
	SELECT @elUsuario=usuarioId FROM dbo.Usuarios WHERE correoInstitucional = @user AND deshabilitado = 0

	IF @elUsuario = -1 BEGIN
		RETURN 0
	END ELSE BEGIN
		DECLARE @temporal VARBINARY(256)
		SELECT @temporal=[password] FROM dbo.Usuarios WHERE usuarioId = @elUsuario
		IF @temporal = HASHBYTES('SHA2_256', @pass) BEGIN
			SELECT usuarioId, apellido1, apellido2, nombre, esAdministrador, correo FROM dbo.Usuarios WHERE usuarioId = @elUsuario FOR JSON AUTO
		END ELSE BEGIN
			RETURN 0
		END
	END
GO
/****** Object:  StoredProcedure [dbo].[sp_permisosUsuario]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_permisosUsuario]
	@usuarioId bigint,
	@permisoUsuarioId int
AS
	INSERT INTO dbo.Permisos_Por_Usuario (permisoUsuarioId, usuarioId)
	VALUES
	(@permisoUsuarioId, @usuarioId)

	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_pintarEditarEstacionamiento]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_pintarEditarEstacionamiento]
	@estacionamientoId bigint
AS
	SELECT nombre, correo, telefono, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspacios, cantEspaciosOficiales, imageURL
	FROM dbo.Estacionamientos e INNER JOIN dbo.Ubicaciones u ON e.ubicacion = u.ubicacionId WHERE estacionamientoId = @estacionamientoId FOR JSON PATH

	SELECT diaSemana, horaInicio, horaFinal FROM dbo.Horarios_Por_Estacionamiento hu 
	INNER JOIN dbo.Horarios h ON hu.horarioId = h.horarioId
	INNER JOIN dbo.Dias d ON h.diaSemana = d.diaId
	WHERE estacionamientoId = @estacionamientoId FOR JSON AUTO

GO
/****** Object:  StoredProcedure [dbo].[sp_pintarEditarUsuario]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_pintarEditarUsuario]
	@usuarioId bigint
AS
	SELECT correo, telefono, departamento = codigoDivision, notificarCorreoAlterno FROM dbo.Usuarios u
	INNER JOIN dbo.Divisiones d ON u.division = d.divisionId
	WHERE usuarioId = @usuarioId FOR JSON PATH

	SELECT placa FROM dbo.Vehiculos_Por_Usuario vu 
	INNER JOIN dbo.Vehiculos v ON vu.vehiculoId = v.vehiculoId
	WHERE usuarioId = @usuarioId AND vu.deshabilitado = 0 FOR JSON AUTO

	SELECT diaSemana, horaInicio, horaFinal FROM dbo.Horarios_Por_Usuario hu 
	INNER JOIN dbo.Horarios h ON hu.horarioId = h.horarioId
	INNER JOIN dbo.Dias d ON h.diaSemana = d.diaId
	WHERE usuarioId = @usuarioId FOR JSON AUTO

GO
/****** Object:  StoredProcedure [dbo].[sp_registrarEstacionamiento]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_registrarEstacionamiento]
	@tipoEstacionamiento smallint,
	@provincia tinyint, 
	@canton smallint,
	@distrito int,
	@direccion nvarchar(500),
	@nombre nvarchar(200),
	@formaAcceso nvarchar(500),
	@cantEspacios int,
	@cantEspaciosEspeciales int,
	@cantEspaciosJefaturas int,
	@cantEspaciosVisitantes int,
	@cantEspaciosOficiales int,
	@correo nvarchar(200),
	@telefono nvarchar(40),
	@identificacion nvarchar(60),
	@imageUrl nvarchar(800),
	@descripcion nvarchar(250)
AS
	-- Registra la ubicacion
	EXEC dbo.sp_ubicaciones @provincia, @canton, @distrito, @direccion

	-- Obtiene la direccion de esa ubicacion recien registrada
	DECLARE @ubicacion bigint 
	SELECT @ubicacion = MAX(ubicacionId) FROM dbo.Ubicaciones

	BEGIN TRANSACTION

		INSERT INTO dbo.Estacionamientos 
			(	tipoEstacionamiento, ubicacion, nombre, formaAcceso,
				cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspaciosOficiales,
				correo, telefono, identificacion, imageUrl, descripcion	)
		VALUES
			(	@tipoEstacionamiento, @ubicacion, @nombre, @formaAcceso,
				@cantEspacios, @cantEspaciosEspeciales, @cantEspaciosJefaturas, @cantEspaciosVisitantes, @cantEspaciosOficiales,
				@correo, @telefono, @identificacion, @imageUrl, @descripcion	)
	COMMIT

	DECLARE @nuevoId INT
	SELECT @nuevoId = MAX(estacionamientoId) FROM dbo.Estacionamientos
	RETURN @nuevoId
GO
/****** Object:  StoredProcedure [dbo].[sp_registrarEstacionamientoTotal]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_registrarEstacionamientoTotal]
	@nombre nvarchar(200),
	@correo nvarchar(200),
	@telefono nvarchar(40),
	@identificacion nvarchar(60),
	@direccionExacta nvarchar(500),
	@formaAcceso nvarchar(500),
	@descripcion nvarchar(250),
	@cantEspaciosEspeciales int,
	@cantEspaciosJefaturas int,
	@cantEspaciosVisitantes int,
	@cantEspaciosOficiales int,
	@cantEspacios int,
	@imageUrl nvarchar(800),
	@lunesA time(7),
	@lunesB time(7),
	@martesA time(7),
	@martesB time(7),
	@miercolesA time(7),
	@miercolesB time(7),
	@juevesA time(7),
	@juevesB time(7),
	@viernesA time(7),
	@viernesB time(7),
	@sabadoA time(7),
	@sabadoB time(7),
	@domingoA time(7),
	@domingoB time(7),
	@esInstitucional bit
AS
	-- institucional 1:
	-- subcontratado 2:

	DECLARE @tipoEstacionamiento INT

	IF @esInstitucional=1 BEGIN
		SELECT @tipoEstacionamiento = tipoEstacionamientoId FROM dbo.TiposEstacionamientos WHERE tipo = 'institucional' 
	END ELSE BEGIN
		SELECT @tipoEstacionamiento = tipoEstacionamientoId FROM dbo.TiposEstacionamientos WHERE tipo = 'subcontratado' 
	END

	DECLARE @nuevoEstacionamientoId BIGINT
	EXEC @nuevoEstacionamientoId = dbo.sp_registrarEstacionamiento @tipoEstacionamiento, 1, 1, 1, @direccionExacta,
	@nombre, @formaAcceso, @cantEspacios, @cantEspaciosEspeciales, @cantEspaciosJefaturas, @cantEspaciosVisitantes, @cantEspaciosOficiales,
	@correo, @telefono, @identificacion, @imageUrl, @descripcion

	-- insercion de los horarios

	IF @lunesA IS NOT NULL AND @lunesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 1, @lunesA, @lunesB
	END

	IF @martesA IS NOT NULL AND @martesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 2, @lunesA, @lunesB
	END

	IF @miercolesA IS NOT NULL AND @miercolesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 3, @lunesA, @lunesB
	END

	IF @juevesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 4, @lunesA, @lunesB
	END

	IF @viernesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 5, @lunesA, @lunesB
	END

	IF @sabadoA IS NOT NULL AND @sabadoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 6, @sabadoA, @sabadoB
	END

	IF @domingoA IS NOT NULL AND @domingoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorarioEstacionamiento @nuevoEstacionamientoId, 7, @domingoA, @domingoB
	END

	RETURN @nuevoEstacionamientoId -- Se completo exitosamente

GO
/****** Object:  StoredProcedure [dbo].[sp_RegistrarFuncionario]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_RegistrarFuncionario]
	@tipoFuncionario int,
	@division int,
	@identificacion nvarchar(60),
	@nombre nvarchar(60),
	@apellido1 nvarchar(60),
	@apellido2 nvarchar(60),
	@telefono nvarchar(40),
	@correoInstitucional nvarchar(200),
	@correo nvarchar(200),
	@notificarCorreoAlterno bit,
	@password nvarchar(100)
AS
	DECLARE @buscaUsuario INT = 0					-- busca si ya la placa esta registrada
	SELECT @buscaUsuario = usuarioId FROM dbo.Usuarios WHERE correoInstitucional = @correoInstitucional OR identificacion = @identificacion;

	
	IF @buscaUsuario = 0 BEGIN
		
		BEGIN TRANSACTION
			INSERT INTO dbo.Usuarios
			(tipoFuncionario, division, identificacion, 
			nombre, apellido1, apellido2, telefono, correoInstitucional,
			correo, notificarCorreoAlterno, [password])
			VALUES
			(@tipoFuncionario, @division, @identificacion, 
			@nombre, @apellido1, @apellido2, @telefono, @correoInstitucional,
			@correo, @notificarCorreoAlterno, HASHBYTES('SHA2_256', @password))
		COMMIT

		SELECT @buscaUsuario = MAX(usuarioId) FROM dbo.Usuarios
		RETURN @buscaUsuario
	END ELSE BEGIN
		RETURN 0
	END
	
GO
/****** Object:  StoredProcedure [dbo].[sp_registrarHorario]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_registrarHorario]
	@usuarioId bigint,
	@diaSemana tinyint,					-- parametros
	@horaInicio time(7),
	@horaFinal time(7)
AS

	DECLARE @registradoComo INT	= 0					-- busca si ya el horario esta registrada
	SELECT @registradoComo = horarioId FROM dbo.Horarios WHERE diaSemana = @diaSemana AND horaInicio = @horaInicio AND horaFinal = @horaFinal;

	DECLARE @yaAsociado BIT = 0
	SELECT @yaAsociado=1 FROM dbo.Horarios_Por_Usuario WHERE usuarioId = @usuarioId AND horarioId = @registradoComo AND deshabilitado = 0

	IF @yaAsociado=1 BEGIN
		RETURN 0					-- Si ya el usuario tenia ese carro, entonces no sigue el registro
	END

	IF @registradoComo<1 BEGIN						-- si no esta resgistrada, lo inserta mediante transaccion
		BEGIN TRANSACTION
			INSERT INTO dbo.Horarios(diaSemana, horaInicio, horaFinal)
			VALUES
			(@diaSemana, @horaInicio, @horaFinal)
		COMMIT
		SELECT @registradoComo = MAX(horarioId) FROM dbo.Horarios
	END
																	-- asocia al usuario con el horario
	BEGIN TRANSACTION												-- para este punto el @registradoComo tiene el id del horario lo haya encontrado o creado
		INSERT INTO dbo.Horarios_Por_Usuario (usuarioId, horarioId)
		VALUES
		(@usuarioId, @registradoComo)
	COMMIT

GO
/****** Object:  StoredProcedure [dbo].[sp_registrarHorarioEstacionamiento]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_registrarHorarioEstacionamiento]
	@estacionamientoId int,
	@diaSemana tinyint,					-- parametros
	@horaInicio time(7),
	@horaFinal time(7)
AS

	DECLARE @registradoComo INT	= 0					-- busca si ya el horario esta registrada
	SELECT @registradoComo = horarioId FROM dbo.Horarios WHERE diaSemana = @diaSemana AND horaInicio = @horaInicio AND horaFinal = @horaFinal;

	DECLARE @yaAsociado BIT = 0
	SELECT @yaAsociado=1 FROM dbo.Horarios_Por_Estacionamiento WHERE estacionamientoId = @estacionamientoId AND horarioId = @registradoComo AND deshabilitado = 0

	IF @yaAsociado=1 BEGIN
		RETURN 0									-- Si el parqueo tenia ese horario, entonces no sigue el registro
	END

	IF @registradoComo<1 BEGIN						-- si no esta resgistrada, lo inserta mediante transaccion
		BEGIN TRANSACTION
			INSERT INTO dbo.Horarios(diaSemana, horaInicio, horaFinal)
			VALUES
			(@diaSemana, @horaInicio, @horaFinal)
		COMMIT
		SELECT @registradoComo = MAX(horarioId) FROM dbo.Horarios
	END
																	-- asocia al usuario con el horario
	BEGIN TRANSACTION												-- para este punto el @registradoComo tiene el id del horario lo haya encontrado o creado
		INSERT INTO dbo.Horarios_Por_Estacionamiento(estacionamientoId, horarioId)
		VALUES
		(@estacionamientoId, @registradoComo)
	COMMIT

GO
/****** Object:  StoredProcedure [dbo].[sp_registrarUsuarioTotal]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_registrarUsuarioTotal]
	@correoInstitucional nvarchar(200),
	@identificacion nvarchar(60),
	@correo nvarchar(200),
	@password nvarchar(200),
	@telefono nvarchar(40),
	@nombre nvarchar(60),
	@apellido1 nvarchar(60),
	@apellido2 nvarchar(60),
	@departamento nvarchar(8),
	@placa1 nvarchar(20),
	@placa2 nvarchar(20),
	@placa3 nvarchar(20),
	@placa4 nvarchar(20),
	@lunesA time(7),
	@lunesB time(7),
	@martesA time(7),
	@martesB time(7),
	@miercolesA time(7),
	@miercolesB time(7),
	@juevesA time(7),
	@juevesB time(7),
	@viernesA time(7),
	@viernesB time(7),
	@sabadoA time(7),
	@sabadoB time(7),
	@domingoA time(7),
	@domingoB time(7),
	@notificarCorreoAlterno bit
AS
	-- busqueda del Id de la division
	DECLARE @divisionId INT
	SELECT @divisionId = divisionId FROM dbo.Divisiones WHERE codigoDivision = @departamento OR descripcion = @departamento

	DECLARE @nuevoUsuarioId BIGINT
	EXEC @nuevoUsuarioId = dbo.sp_RegistrarFuncionario NULL, @divisionId, @identificacion, @nombre, @apellido1, @apellido2, @telefono, @correoInstitucional, @correo, @notificarCorreoAlterno, @password
	
	IF @nuevoUsuarioId = 0 BEGIN
		RETURN 0					-- QUIERE DECIR QUE YA EL USUARIO ESTA REGISTRADO (por Id o por correoInstitucional)
	END

	-- Inmediatamente Inserta los permisos

	EXEC dbo.sp_permisosUsuario @nuevoUsuarioId,1
	EXEC dbo.sp_permisosUsuario @nuevoUsuarioId,2


	-- busqueda o registro de las placas (el 1 es auto particular)

	IF @placa1 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @nuevoUsuarioId, @placa1, 1
	END

	IF @placa2 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @nuevoUsuarioId, @placa2, 1
	END

	IF @placa3 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @nuevoUsuarioId, @placa3, 1
	END

	IF @placa4 IS NOT NULL BEGIN
		EXEC dbo.sp_RegistrarVehiculo @nuevoUsuarioId, @placa4, 1
	END

	-- insercion de los horarios

	IF @lunesA IS NOT NULL AND @lunesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 1, @lunesA, @lunesB
	END

	IF @martesA IS NOT NULL AND @martesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 2, @martesA, @martesB
	END

	IF @miercolesA IS NOT NULL AND @miercolesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 3, @miercolesA, @miercolesB
	END

	IF @juevesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 4, @juevesA, @juevesB
	END

	IF @viernesA IS NOT NULL AND @juevesB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 5, @viernesA, @viernesB
	END

	IF @sabadoA IS NOT NULL AND @sabadoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 6, @sabadoA, @sabadoB
	END

	IF @domingoA IS NOT NULL AND @domingoB IS NOT NULL BEGIN
		EXEC dbo.sp_registrarHorario @nuevoUsuarioId, 7, @domingoA, @domingoB
	END

	RETURN @nuevoUsuarioId -- Se completo exitosamente

GO
/****** Object:  StoredProcedure [dbo].[sp_RegistrarVehiculo]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_RegistrarVehiculo]
	@usuarioId bigint,
	@placa NVARCHAR(20),					-- parametros
	@tipoVehiculo SMALLINT
AS

	DECLARE @Existe INT	= 0					-- busca si ya la placa esta registrada
	SELECT @Existe = vehiculoId FROM dbo.Vehiculos WHERE placa = @placa AND tipoVehiculo = @tipoVehiculo;

	DECLARE @yaAsociado BIT = 0
	SELECT @yaAsociado=1 FROM dbo.Vehiculos_Por_Usuario WHERE usuarioId = @usuarioId AND vehiculoId = @Existe AND deshabilitado = 0

	IF @yaAsociado=1 BEGIN
		RETURN 0					-- Si ya el usuario tenia ese carro, entonces no sigue el registro
	END

	IF @Existe<1 BEGIN						-- si no esta resgistrada, lo inserta mediante transaccion
		BEGIN TRANSACTION
			INSERT INTO dbo.Vehiculos (placa, tipoVehiculo)
			VALUES
			(@placa, @tipoVehiculo)
		COMMIT
		SELECT @Existe = MAX(vehiculoId) FROM dbo.Vehiculos
	END

	BEGIN TRANSACTION						-- asocia al usuario con el vehiculo
		INSERT INTO dbo.Vehiculos_Por_Usuario (usuarioId, vehiculoId)
		VALUES
		(@usuarioId, @Existe)
	COMMIT

	RETURN @Existe

GO
/****** Object:  StoredProcedure [dbo].[sp_ubicaciones]    Script Date: 14/5/2022 01:06:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_ubicaciones]
	@provincia tinyint, 
	@canton smallint,
	@distrito int,
	@direccion nvarchar(500)
AS
	SELECT 'Im here'
	INSERT INTO dbo.Ubicaciones (provincia, canton, distrito, direccionExacta) VALUES
	(@provincia, @canton, @distrito, @direccion)

	RETURN 1
GO
USE [master]
GO
ALTER DATABASE [parqueos] SET  READ_WRITE 
GO
