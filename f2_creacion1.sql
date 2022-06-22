USE [master]
GO
/****** Object:  Database [parqueos]    Script Date: 20/6/2022 19:52:31 ******/
CREATE DATABASE [parqueos]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'parqueos', FILENAME = N'C:\development\basedata\parqueos\parqueos.mdf' , SIZE = 73728KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'parqueos_log', FILENAME = N'C:\development\basedata\parqueos\parqueos_log.ldf' , SIZE = 860160KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
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
/****** Object:  Table [dbo].[Cantones]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[Dias]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[Distritos]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[Divisiones]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Divisiones](
	[divisionId] [int] IDENTITY(1,1) NOT NULL,
	[codigoDivision] [nvarchar](50) NOT NULL,
	[descripcion] [nvarchar](60) NOT NULL,
 CONSTRAINT [PK_Divisiones] PRIMARY KEY CLUSTERED 
(
	[divisionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Espacios_Estacionamientos]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Espacios_Estacionamientos](
	[espacioId] [bigint] IDENTITY(1,1) NOT NULL,
	[estacionamientoId] [int] NOT NULL,
	[numero] [int] NULL,
	[tipo] [tinyint] NOT NULL,
	[descripcion] [nvarchar](250) NULL,
	[deshabilitado] [bit] NOT NULL,
 CONSTRAINT [PK_Espacios_Estacionamientos] PRIMARY KEY CLUSTERED 
(
	[espacioId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Estacionamientos]    Script Date: 20/6/2022 19:52:31 ******/
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
	[cantDisponibles] [int] NULL,
	[cantEspecialesDisponibles] [int] NULL,
	[cantJefaturasDisponibles] [int] NULL,
	[cantVisitantesDisponibles] [int] NULL,
	[cantOficialesDisponibles] [int] NULL,
 CONSTRAINT [PK_Estacionamientos] PRIMARY KEY CLUSTERED 
(
	[estacionamientoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Horarios]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[Horarios_Por_Estacionamiento]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[Horarios_Por_Usuario]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[Permisos_Por_Usuario]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Permisos_Por_Usuario](
	[permisoUsuarioId] [int] NOT NULL,
	[usuarioId] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PermisosUsuario]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[Provincias]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[Reservaciones]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reservaciones](
	[reservacionId] [bigint] IDENTITY(1,1) NOT NULL,
	[usuarioId] [bigint] NOT NULL,
	[estacionamientoId] [int] NOT NULL,
	[espacioId] [bigint] NULL,
	[tipoEspacioId] [tinyint] NULL,
	[horaInicio] [datetime] NOT NULL,
	[horaFinal] [datetime] NOT NULL,
	[timestamp] [datetime] NOT NULL,
	[ipAddress] [nvarchar](60) NULL,
	[checksum] [varbinary](256) NULL,
	[deshabilitado] [bit] NOT NULL,
	[recurrente] [bit] NOT NULL,
 CONSTRAINT [PK_Reservaciones] PRIMARY KEY CLUSTERED 
(
	[reservacionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sys_Logs]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[Tipos_Espacios]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[TiposEstacionamientos]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[TiposFuncionarios]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[tipoVehiculo]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[Ubicaciones]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[Usuarios]    Script Date: 20/6/2022 19:52:31 ******/
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
	[esJefatura] [bit] NULL,
	[esDiscapacitado] [bit] NULL,
	[esOperador] [bit] NULL,
 CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED 
(
	[usuarioId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vehiculos]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[Vehiculos_Por_Usuario]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  Table [dbo].[Visitas]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Visitas](
	[visitante] [nvarchar](120) NOT NULL,
	[identificacion] [nvarchar](60) NOT NULL,
	[vehiculo] [nvarchar](60) NULL,
	[motivo] [nvarchar](120) NULL,
	[destino] [nvarchar](120) NULL,
	[reservacion] [bigint] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VisitasOficiales]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VisitasOficiales](
	[conductor] [nvarchar](120) NOT NULL,
	[sede] [nvarchar](60) NULL,
	[placa] [nvarchar](60) NOT NULL,
	[modelo] [nvarchar](60) NULL,
	[reservacion] [bigint] NULL
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
ALTER TABLE [dbo].[Usuarios] ADD  CONSTRAINT [DF_Usuarios_esJefatura]  DEFAULT ((0)) FOR [esJefatura]
GO
ALTER TABLE [dbo].[Usuarios] ADD  CONSTRAINT [DF_Usuarios_esDiscapacitado]  DEFAULT ((0)) FOR [esDiscapacitado]
GO
ALTER TABLE [dbo].[Usuarios] ADD  CONSTRAINT [DF_Usuarios_esOperador]  DEFAULT ((0)) FOR [esOperador]
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
ALTER TABLE [dbo].[Reservaciones]  WITH CHECK ADD  CONSTRAINT [FK_Reservaciones_TiposEspacios_tipoEspacioId] FOREIGN KEY([tipoEspacioId])
REFERENCES [dbo].[Tipos_Espacios] ([tipoEspacioId])
GO
ALTER TABLE [dbo].[Reservaciones] CHECK CONSTRAINT [FK_Reservaciones_TiposEspacios_tipoEspacioId]
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
ALTER TABLE [dbo].[Visitas]  WITH CHECK ADD  CONSTRAINT [FK_Visitas_Reservaciones_reservacionId] FOREIGN KEY([reservacion])
REFERENCES [dbo].[Reservaciones] ([reservacionId])
GO
ALTER TABLE [dbo].[Visitas] CHECK CONSTRAINT [FK_Visitas_Reservaciones_reservacionId]
GO
ALTER TABLE [dbo].[VisitasOficiales]  WITH CHECK ADD  CONSTRAINT [FK_VisitasOficiales_Reservaciones_reservacionId] FOREIGN KEY([reservacion])
REFERENCES [dbo].[Reservaciones] ([reservacionId])
GO
ALTER TABLE [dbo].[VisitasOficiales] CHECK CONSTRAINT [FK_VisitasOficiales_Reservaciones_reservacionId]
GO
/****** Object:  StoredProcedure [dbo].[deshabilitarEstacionamiento]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  StoredProcedure [dbo].[deshabilitarUsuario]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  StoredProcedure [dbo].[Registrar_Horario]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_actualizarEspaciosDisponibles]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_actualizarEspaciosDisponibles]
	@estacionamientoId INT
AS
	DECLARE @particular INT, @oficiales INT, @visitantes INT, @jefaturas INT, @especiales INT

	EXEC @particular = dbo.sp_calcularEspaciosDisponibles @estacionamientoId, 1
	EXEC @oficiales = dbo.sp_calcularEspaciosDisponibles @estacionamientoId, 2
	EXEC @visitantes = dbo.sp_calcularEspaciosDisponibles @estacionamientoId, 3
	EXEC @jefaturas = dbo.sp_calcularEspaciosDisponibles @estacionamientoId, 4
	EXEC @especiales = dbo.sp_calcularEspaciosDisponibles @estacionamientoId, 5

	UPDATE dbo.Estacionamientos SET cantDisponibles = @particular, cantOficialesDisponibles = @oficiales,
	cantVisitantesDisponibles = @visitantes, cantJefaturasDisponibles = @jefaturas, cantEspecialesDisponibles = @especiales
	WHERE estacionamientoId = @estacionamientoId

GO
/****** Object:  StoredProcedure [dbo].[sp_actualizarSalidaReservaciones]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_actualizarSalidaReservaciones]
	@horaPivot datetime
AS
	UPDATE dbo.Reservaciones SET deshabilitado = 1 WHERE horaFinal < @horaPivot
	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_calcularEspaciosDisponibles]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_calcularEspaciosDisponibles]
	@estacionamientoId INT,
	@tipoEspacioId TINYINT
AS
	DECLARE @totales INT, @ocupados INT

	IF @tipoEspacioId = 1 BEGIN
		SELECT @totales = cantEspacios FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamientoId
	END
	IF @tipoEspacioId = 2 BEGIN
		SELECT @totales = cantEspaciosOficiales FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamientoId
	END
	IF @tipoEspacioId = 3 BEGIN
		SELECT @totales = cantEspaciosVisitantes FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamientoId
	END
	IF @tipoEspacioId = 4 BEGIN
		SELECT @totales = cantEspaciosJefaturas FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamientoId
	END
	IF @tipoEspacioId = 5 BEGIN
		SELECT @totales = cantEspaciosEspeciales FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamientoId
	END

	SELECT @ocupados = COUNT(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamientoId AND tipoEspacioId = @tipoEspacioId AND deshabilitado = 0

	RETURN @totales - @ocupados
GO
/****** Object:  StoredProcedure [dbo].[sp_consultaFuncionario]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_consultaFuncionario]
	@identificacion nvarchar(60)
AS 

	DECLARE @usuarioId bigint = -1
	SELECT @usuarioId = usuarioId FROM dbo.Usuarios WHERE identificacion = @identificacion AND deshabilitado=0

	IF @usuarioId > 0 BEGIN
		SELECT identificacion, apellido1, apellido2, nombre, telefono, correoInstitucional, departamento = codigoDivision FROM dbo.Usuarios u
		INNER JOIN dbo.Divisiones d ON u.division = d.divisionId
		WHERE identificacion = @identificacion

		SELECT placa FROM dbo.Vehiculos_Por_Usuario vu 
		INNER JOIN dbo.Vehiculos v ON vu.vehiculoId = v.vehiculoId 
		WHERE usuarioId = @usuarioId AND vu.deshabilitado = 0

		SELECT dia, horaInicio, horaFinal FROM dbo.Horarios_Por_Usuario hu 
		INNER JOIN dbo.Horarios h ON hu.horarioId = h.horarioId
		INNER JOIN dbo.Dias d ON h.diaSemana = d.diaId
		WHERE usuarioId = @usuarioId AND hu.deshabilitado = 0

		RETURN 1
	END ELSE BEGIN
		RETURN 0
	END
GO
/****** Object:  StoredProcedure [dbo].[sp_crearEspacios]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_crearEspacios]
	@estacionamiento int,
	@tipo nvarchar(20),
	@cantidad int
AS
	DECLARE @i INT
	SET @i = 1
	WHILE @i <= @cantidad
	BEGIN
		INSERT INTO dbo.Espacios_Estacionamientos (estacionamientoId, tipo) VALUES
		(@estacionamiento, @tipo)
		SET @i = @i + 1
	END
GO
/****** Object:  StoredProcedure [dbo].[sp_departamentos]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_departamentos]
AS
	SELECT divisionID, codigoDivision, descripcion FROM Divisiones FOR JSON AUTO
	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_diasSemana]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_diasSemana]
AS
	SELECT diaId, dia FROM Dias FOR JSON AUTO
	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_estacionamientoinfo]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_estacionamientoinfo] 
	@estacionamientoId INT
AS
	SELECT estacionamientoId, nombre, descripcion, direccionExacta, formaAcceso, cantEspacios, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosOficiales, cantEspaciosVisitantes, imageUrl
	FROM dbo.Estacionamientos e INNER JOIN dbo.Ubicaciones u ON e.ubicacion = u.ubicacionId WHERE estacionamientoId = @estacionamientoId  AND deshabilitado = 0 FOR JSON PATH
	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_estacionamientosTipoSubcontratados]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	
-- Bandera
-- 0: Institucional
-- 1: Subcontratado

CREATE PROCEDURE [dbo].[sp_estacionamientosTipoSubcontratados]
	@subcontratados BIT
AS
	IF @subcontratados = 1 BEGIN
		--subcontratados
		SELECT estacionamientoId, nombre, espaciosTotales = cantEspacios+cantEspaciosEspeciales+cantEspaciosJefaturas+cantEspaciosVisitantes+cantEspaciosOficiales, telefono, imageUrl FROM dbo.Estacionamientos
		WHERE tipoEstacionamiento = 2 AND deshabilitado = 0 FOR JSON PATH

	END ELSE BEGIN
		--institucionales
		SELECT estacionamientoId, nombre, espaciosTotales = cantEspacios+cantEspaciosEspeciales+cantEspaciosJefaturas+cantEspaciosVisitantes+cantEspaciosOficiales, telefono, imageUrl FROM dbo.Estacionamientos
		WHERE tipoEstacionamiento = 1 AND deshabilitado = 0 FOR JSON PATH

	END

	RETURN 1

GO
/****** Object:  StoredProcedure [dbo].[sp_estacionamientosUsuario]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_estacionamientosUsuario]
	@objetivo INT,
	@usuario BIGINT
AS
	
	DECLARE @esAdministrador BIT, @esJefatura BIT, @esDiscapacitado BIT, @esOperador BIT
	SELECT @esAdministrador = esAdministrador, @esJefatura = esJefatura, @esDiscapacitado = esDiscapacitado, @esOperador = esOperador FROM dbo.Usuarios WHERE usuarioId = @usuario

	DECLARE @esFuncionario BIT = 1

	IF @esAdministrador = 1 OR @esJefatura = 1 OR @esOperador = 1 BEGIN
		SET @esFuncionario = 0
	END
	
	DECLARE @disponibles INT

	-- Usuario que esta reservando es un jefe
	IF @esJefatura = 1 BEGIN
		IF @objetivo = 1 BEGIN		-- jefatura reserva para si mismo
			IF @esDiscapacitado = 1 BEGIN			-- jefe + discapacidad
				SELECT estacionamientoId, 'Discapacitado' AS tipo, cantEspaciosEspeciales AS cantidad, cantEspecialesDisponibles AS disponibles  FROM dbo.Estacionamientos WHERE cantEspaciosEspeciales>0 FOR JSON PATH
			END ELSE BEGIN						-- solo en los de jefatura
				SELECT estacionamientoId, 'Jefatura' AS tipo, cantEspaciosJefaturas AS cantidad, cantJefaturasDisponibles AS disponibles  FROM dbo.Estacionamientos WHERE cantEspaciosJefaturas>0 FOR JSON PATH
			END
		END
		IF @objetivo = 2 BEGIN		-- jefatura reserva para un visitante
			SELECT estacionamientoId, 'Visitantes' AS tipo, cantEspaciosVisitantes AS cantidad, cantVisitantesDisponibles AS disponibles  FROM dbo.Estacionamientos WHERE cantEspaciosVisitantes>0 AND tipoEstacionamiento = 2 FOR JSON PATH
		END
	END

	-- Usuario que esta reservando es un administrador
	IF @esAdministrador = 1 BEGIN
		IF @objetivo = 1 BEGIN		-- administrador va a reservar para si mismo
			IF @esDiscapacitado = 1 BEGIN		-- admin + discapacidad
				SELECT estacionamientoId, 'Discapacitado' AS tipo, cantEspaciosEspeciales AS cantidad, cantEspecialesDisponibles AS disponibles  FROM dbo.Estacionamientos WHERE cantEspaciosEspeciales>0 FOR JSON PATH
			END ELSE BEGIN					-- solo en los particulares
				SELECT estacionamientoId, 'Particular' AS tipo, cantEspacios AS cantidad, cantDisponibles AS disponibles  FROM dbo.Estacionamientos WHERE cantEspacios>0 FOR JSON PATH
			END
		END
		IF @objetivo = 2 BEGIN		-- administrador reserva para una visita
			SELECT estacionamientoId, 'Visitantes' AS tipo, cantEspaciosVisitantes AS cantidad, cantVisitantesDisponibles AS disponibles FROM dbo.Estacionamientos WHERE cantEspaciosVisitantes>0 AND tipoEstacionamiento = 2 FOR JSON PATH
		END
	END

	-- Usuario que esta reservando es un operador
	IF @esOperador = 1 BEGIN
		IF @objetivo = 2 BEGIN		-- operador va a registrar la entrada de un carro oficial
			SELECT estacionamientoId, 'Oficial' AS tipo, cantEspaciosOficiales AS cantidad, cantOficialesDisponibles AS disponibles FROM dbo.Estacionamientos WHERE cantEspaciosOficiales>0 FOR JSON PATH
		END
	END

	-- Usuario que esta reservando es un funcionario
	IF @esFuncionario = 1 BEGIN
		IF @objetivo = 1 BEGIN		-- funcionario va a reservar para si mismo
			IF @esDiscapacitado = 1 BEGIN		-- funcionario + discapacidad
				SELECT estacionamientoId, 'Discapacitado' AS tipo, cantEspaciosEspeciales AS cantidad, cantEspecialesDisponibles AS disponibles FROM dbo.Estacionamientos WHERE cantEspaciosEspeciales>0 FOR JSON PATH
			END ELSE BEGIN					-- solo en los particulares
				SELECT estacionamientoId, 'Particular' AS tipo, cantEspacios AS cantidad, cantDisponibles AS disponibles FROM dbo.Estacionamientos WHERE cantEspacios>0 FOR JSON PATH
			END
		END
	END

GO
/****** Object:  StoredProcedure [dbo].[sp_franjasHorarias]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_franjasHorarias]

AS
	SELECT dia, horaInicio, horaFinal, funcionarios FROM
	(SELECT horarioId, funcionarios = count(horarioId) FROM dbo.Horarios_Por_Usuario
	WHERE deshabilitado=0 GROUP BY horarioId) hua 
	INNER JOIN dbo.Horarios h ON hua.horarioId = h.horarioId
	INNER JOIN dbo.Dias d ON h.diaSemana = d.diaId
	WHERE horaInicio != '00:00' AND horaFinal != '00:00'
	ORDER BY diaSemana, funcionarios DESC FOR JSON PATH
	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_getDisponiblesTipo]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_getDisponiblesTipo]
	@tipo nvarchar(60)
AS
	IF (@tipo = 'Particular') BEGIN
		SELECT estacionamientoId, cantEspacios FROM dbo.Estacionamientos WHERE cantEspacios>0 AND deshabilitado=0 FOR JSON AUTO
		RETURN 1
	END
	IF (@tipo='Oficial') BEGIN
		SELECT estacionamientoId, cantEspaciosOficiales FROM dbo.Estacionamientos WHERE cantEspaciosOficiales>0 AND deshabilitado=0 FOR JSON AUTO
		RETURN 1
	END
	IF (@tipo = 'Visitante') BEGIN
		SELECT estacionamientoId, cantEspaciosVisitantes FROM dbo.Estacionamientos WHERE cantEspaciosVisitantes>0 AND deshabilitado=0 FOR JSON AUTO
		RETURN 1
	END
	IF (@tipo = 'Jefatura') BEGIN
		SELECT estacionamientoId, cantEspaciosJefaturas FROM dbo.Estacionamientos WHERE cantEspaciosJefaturas>0 AND deshabilitado=0 FOR JSON AUTO
		RETURN 1
	END
	IF (@tipo = 'Discapacitado') BEGIN
		SELECT estacionamientoId, cantEspaciosEspeciales FROM dbo.Estacionamientos WHERE cantEspaciosEspeciales>0 AND deshabilitado=0 FOR JSON AUTO
		RETURN 1
	END
GO
/****** Object:  StoredProcedure [dbo].[sp_guardarEditarEstacionamiento]    Script Date: 20/6/2022 19:52:31 ******/
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
	@tipoEstacionamiento int,
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
	IF @formaAcceso IS NOT NULL
	UPDATE dbo.Estacionamientos SET nombre = @nombre, correo= @correo, telefono = @telefono, formaAcceso = @formaAcceso, 
	descripcion = @descripcion, cantEspaciosEspeciales = @cantEspaciosEspeciales, cantEspaciosJefaturas = @cantEspaciosJefaturas, cantEspaciosVisitantes = @cantEspaciosVisitantes,
	cantEspaciosOficiales = @cantEspaciosOficiales, cantEspacios = @cantEspacios, imageUrl = @imageUrl, tipoEstacionamiento=@tipoEstacionamiento
	WHERE identificacion = @identificacion OR estacionamientoId = @estacionamientoId

	ELSE
	UPDATE dbo.Estacionamientos SET nombre = @nombre, correo= @correo, telefono = @telefono, 
	descripcion = @descripcion, cantEspaciosEspeciales = @cantEspaciosEspeciales, cantEspaciosJefaturas = @cantEspaciosJefaturas, cantEspaciosVisitantes = @cantEspaciosVisitantes,
	cantEspaciosOficiales = @cantEspaciosOficiales, cantEspacios = @cantEspacios, imageUrl = @imageUrl, tipoEstacionamiento=@tipoEstacionamiento
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

	RETURN 1

GO
/****** Object:  StoredProcedure [dbo].[sp_guardarEditarUsuario]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_guardarEditarUsuario]
	@usuarioId bigint,
	@correo nvarchar(200),
	@password nvarchar(200),
	@telefono nvarchar(40),
	@departamento nvarchar(50),
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

	SELECT @departamento
	SELECT @divisionId

	-- actualiza informacion de la tabla de usuario
	IF @password IS NOT NULL
		UPDATE dbo.Usuarios SET correo= @correo, [password]= HASHBYTES('SHA2_256', @password), telefono = @telefono, notificarCorreoAlterno = @notificarCorreoAlterno, division = @divisionId
		WHERE usuarioId = @usuarioId
	ELSE 
		UPDATE dbo.Usuarios SET correo= @correo, telefono = @telefono, notificarCorreoAlterno = @notificarCorreoAlterno, division = @divisionId
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

	-- en caso de algun error

	DECLARE @departamentoFinal INT
	SELECT @departamentoFinal = division FROM dbo.Usuarios WHERE usuarioId = @usuarioId

	IF @departamentoFinal IS NULL BEGIN
		UPDATE dbo.Usuarios SET division = 1 WHERE usuarioId= @usuarioId
	END

	RETURN 1

GO
/****** Object:  StoredProcedure [dbo].[sp_guardarEditarUsuarioF2]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_guardarEditarUsuarioF2]
	@usuarioId bigint,
	@correo nvarchar(200),
	@password nvarchar(200),
	@telefono nvarchar(40),
	@departamento nvarchar(50),
	@placa1 nvarchar(20),
	@placa2 nvarchar(20),
	@placa3 nvarchar(20),
	@placa4 nvarchar(20),
	@notificarCorreoAlterno bit
AS
	-- busqueda del Id de la division
	DECLARE @divisionId INT
	SELECT @divisionId = divisionId FROM dbo.Divisiones WHERE codigoDivision = @departamento OR descripcion = @departamento

	SELECT @departamento
	SELECT @divisionId

	-- actualiza informacion de la tabla de usuario
	IF @password IS NOT NULL
		UPDATE dbo.Usuarios SET correo= @correo, [password]= HASHBYTES('SHA2_256', @password), telefono = @telefono, notificarCorreoAlterno = @notificarCorreoAlterno, division = @divisionId
		WHERE usuarioId = @usuarioId
	ELSE 
		UPDATE dbo.Usuarios SET correo= @correo, telefono = @telefono, notificarCorreoAlterno = @notificarCorreoAlterno, division = @divisionId
		WHERE usuarioId = @usuarioId



	-- limpia las placas asociadas para poder insertar las nuevas

	UPDATE dbo.Vehiculos_Por_Usuario SET deshabilitado=1 WHERE usuarioId = @usuarioId

	-- limpia los horarios asociadas para poder insertar las nuevas

	UPDATE dbo.Horarios_Por_Usuario SET deshabilitado=1 WHERE usuarioId = @usuarioId



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
	
	-- *AHORA SE LLAMAN APARTE, AQUI SE LIMPIAN LOS ACTUALES Y APARTE
	--  EN EL CICLO ES DONDE SE VAN A INSERTAR
	--  LLAMANDO A:
	--	EXEC dbo.sp_registrarHorario @usuarioId, @dia, @horaEntrada, @horaSalida

	-- en caso de algun error

	DECLARE @departamentoFinal INT
	SELECT @departamentoFinal = division FROM dbo.Usuarios WHERE usuarioId = @usuarioId

	IF @departamentoFinal IS NULL BEGIN
		UPDATE dbo.Usuarios SET division = 1 WHERE usuarioId= @usuarioId
	END

	RETURN 1

GO
/****** Object:  StoredProcedure [dbo].[sp_informeEstacionamientos]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_informeFuncionarios]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_inicio]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_InsertarHorario]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_login]    Script Date: 20/6/2022 19:52:31 ******/
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
			RETURN 1
		END ELSE BEGIN
			RETURN 0
		END
	END
GO
/****** Object:  StoredProcedure [dbo].[sp_ocupacionTotalXDepartamento]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_ocupacionTotalXDepartamento]
	@departamento INT
AS

	SELECT t1.estacionamiento, CONVERT(numeric(3,0), (CAST(ocupacion AS FLOAT)/CAST(total AS FLOAT))*100) AS ocupacion
	FROM 
		(SELECT e.nombre AS estacionamiento, COUNT(r.reservacionId) AS ocupacion FROM dbo.Reservaciones r
		INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
		INNER JOIN dbo.Estacionamientos e ON r.estacionamientoId = e.estacionamientoId
		WHERE u.division = @departamento
		GROUP BY e.nombre) t1
	INNER JOIN
		(SELECT e.nombre AS estacionamiento, COUNT(reservacionId) AS total FROM dbo.Reservaciones r 
		INNER JOIN dbo.Estacionamientos e ON r.estacionamientoId = e.estacionamientoId
		GROUP BY e.nombre) t2
	ON t1.estacionamiento = t2.estacionamiento
	FOR JSON PATH

	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_ocupacionXDepartamento]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_ocupacionXDepartamento]
	@estacionamiento INT
AS
	DECLARE @totalReservasEstacionamiento INT
	SELECT @totalReservasEstacionamiento = count(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND deshabilitado = 0

	SELECT codigoDivision, descripcion, CONVERT(numeric(3,0), (CAST(count(reservacionId) AS FLOAT)/CAST(@totalReservasEstacionamiento AS FLOAT))*100)
	AS Espacios FROM dbo.Reservaciones r
	INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	INNER JOIN dbo.Divisiones d ON u.division = d.divisionId
	WHERE estacionamientoId = @estacionamiento AND r.deshabilitado = 0
	GROUP BY codigoDivision, descripcion FOR JSON PATH

	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_ocupacionXDepartamentoJefe]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_ocupacionXDepartamentoJefe]
	@estacionamiento INT,
	@departamento INT
AS
	DECLARE @totalReservasEstacionamiento INT
	SELECT @totalReservasEstacionamiento = count(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND deshabilitado = 0

	SELECT codigoDivision, descripcion, CONVERT(numeric(3,0), (CAST(count(reservacionId) AS FLOAT)/CAST(@totalReservasEstacionamiento AS FLOAT))*100)
	AS Espacios FROM dbo.Reservaciones r
	INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	INNER JOIN dbo.Divisiones d ON u.division = d.divisionId
	WHERE estacionamientoId = @estacionamiento AND r.deshabilitado = 0 AND u.division = @departamento
	GROUP BY codigoDivision, descripcion FOR JSON PATH

	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_ocupacionXTipo]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_ocupacionXTipo]
	@estacionamiento INT
AS

	-- obtiene los disponibles de cada tipo en ese parqueo

	DECLARE @totalParticulares INT
	DECLARE @totalEspeciales INT
	DECLARE @totalJefaturas INT
	DECLARE @totalVisitantes INT
	DECLARE @totalOficiales INT
	SELECT @totalParticulares = cantEspacios, @totalEspeciales = cantEspaciosEspeciales, @totalJefaturas = cantEspaciosJefaturas,
	       @totalVisitantes = cantEspaciosVisitantes, @totalOficiales = cantEspaciosOficiales
	FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamiento

	-- obtiene los ocupados ya en reservas

	DECLARE @ocupadosParticulares INT
	DECLARE @ocupadosEspeciales INT
	DECLARE @ocupadosJefaturas INT
	DECLARE @ocupadosVisitantes INT
	DECLARE @ocupadosOficiales INT

	-- Obtiene los particulares
	SELECT @ocupadosParticulares = COUNT(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND tipoEspacioId = 1 AND deshabilitado = 0


	-- Obtiene los Especiales/Discapacitados
	SELECT @ocupadosEspeciales = COUNT(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND tipoEspacioId = 5 AND deshabilitado = 0


	-- Obtiene los de Jefaturas
	SELECT @ocupadosJefaturas = COUNT(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND tipoEspacioId = 4 AND deshabilitado = 0

	-- Obtiene los de Visitantes
	SELECT @ocupadosVisitantes = COUNT(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND tipoEspacioId = 3 AND deshabilitado = 0

	-- Obtiene los Oficiales
	SELECT @ocupadosOficiales = COUNT(reservacionId) FROM dbo.Reservaciones WHERE estacionamientoId = @estacionamiento AND tipoEspacioId = 2 AND deshabilitado = 0


	-- Calcula el porcentaje de ocupacion: (ocupados/totales)*100

	DECLARE @relacionParticulares INT
	DECLARE @relacionEspeciales INT
	DECLARE @relacionJefaturas INT
	DECLARE @relacionVisitantes INT
	DECLARE @relacionOficiales INT

	-- En cada uno hay bloques begin-try, quiere decir que no hay espacios de x tipo (o sea, su cantidad es 0)
	-- entonces dara un  error de division por cero. Se asigna un -1 y eso indicaria que no esta disponible

	BEGIN TRY
		SELECT @relacionParticulares = (CAST(@ocupadosParticulares AS FLOAT)/CAST(@totalParticulares AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionParticulares = -1;
	END CATCH;


	BEGIN TRY
		SELECT @relacionEspeciales = (CAST(@ocupadosEspeciales AS FLOAT)/CAST(@totalEspeciales AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionEspeciales = -1;
	END CATCH;

	BEGIN TRY
		SELECT @relacionJefaturas = (CAST(@ocupadosJefaturas AS FLOAT)/CAST(@totalJefaturas AS FLOAT))*100
	END TRY
	BEGIN CATCH
		SELECT @relacionJefaturas = -1;
	END CATCH;

	BEGIN TRY
		SELECT @relacionVisitantes = (CAST(@ocupadosVisitantes AS FLOAT)/CAST(@totalVisitantes AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionVisitantes = -1;
	END CATCH;

	BEGIN TRY
		SELECT @relacionOficiales = (CAST(@ocupadosOficiales AS FLOAT)/CAST(@totalOficiales AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionOficiales = -1;
	END CATCH;

	SELECT @relacionParticulares AS Particulares, @relacionEspeciales AS Especiales, @relacionJefaturas AS Jefaturas, @relacionVisitantes AS Visitantes, @relacionOficiales AS Oficiales FOR JSON PATH
	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_ocupacionXTipoJefe]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_ocupacionXTipoJefe]
	@estacionamiento INT,
	@departamento INT

AS

	-- obtiene los disponibles de cada tipo en ese parqueo

	DECLARE @totalParticulares INT
	DECLARE @totalEspeciales INT
	DECLARE @totalJefaturas INT
	DECLARE @totalVisitantes INT
	DECLARE @totalOficiales INT
	SELECT @totalParticulares = cantEspacios, @totalEspeciales = cantEspaciosEspeciales, @totalJefaturas = cantEspaciosJefaturas,
	       @totalVisitantes = cantEspaciosVisitantes, @totalOficiales = cantEspaciosOficiales
	FROM dbo.Estacionamientos WHERE estacionamientoId = @estacionamiento

	-- obtiene los ocupados ya en reservas

	DECLARE @ocupadosParticulares INT
	DECLARE @ocupadosEspeciales INT
	DECLARE @ocupadosJefaturas INT
	DECLARE @ocupadosVisitantes INT
	DECLARE @ocupadosOficiales INT

	-- Obtiene los particulares
	SELECT @ocupadosParticulares = COUNT(reservacionId) FROM dbo.Reservaciones r INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	WHERE r.estacionamientoId = @estacionamiento AND tipoEspacioId = 1 AND r.deshabilitado = 0 AND u.division = @departamento


	-- Obtiene los Especiales/Discapacitados
	SELECT @ocupadosEspeciales = COUNT(reservacionId) FROM dbo.Reservaciones r INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	WHERE r.estacionamientoId = @estacionamiento AND tipoEspacioId = 5 AND r.deshabilitado = 0 AND u.division = @departamento


	-- Obtiene los de Jefaturas
	SELECT @ocupadosJefaturas = COUNT(reservacionId) FROM dbo.Reservaciones r INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	WHERE r.estacionamientoId = @estacionamiento AND tipoEspacioId = 4 AND r.deshabilitado = 0 AND u.division = @departamento

	-- Obtiene los de Visitantes
	SELECT @ocupadosVisitantes = COUNT(reservacionId) FROM dbo.Reservaciones r INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	WHERE r.estacionamientoId = @estacionamiento AND r.tipoEspacioId = 3 AND r.deshabilitado = 0 AND u.division = @departamento

	-- Obtiene los Oficiales
	SELECT @ocupadosOficiales = COUNT(reservacionId) FROM dbo.Reservaciones r INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	WHERE r.estacionamientoId = @estacionamiento AND r.tipoEspacioId = 2 AND r.deshabilitado = 0 AND u.division = @departamento


	-- Calcula el porcentaje de ocupacion: (ocupados/totales)*100

	DECLARE @relacionParticulares INT
	DECLARE @relacionEspeciales INT
	DECLARE @relacionJefaturas INT
	DECLARE @relacionVisitantes INT
	DECLARE @relacionOficiales INT

	-- En cada uno hay bloques begin-try, quiere decir que no hay espacios de x tipo (o sea, su cantidad es 0)
	-- entonces dara un  error de division por cero. Se asigna un -1 y eso indicaria que no esta disponible

	BEGIN TRY
		SELECT @relacionParticulares = (CAST(@ocupadosParticulares AS FLOAT)/CAST(@totalParticulares AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionParticulares = -1;
	END CATCH;


	BEGIN TRY
		SELECT @relacionEspeciales = (CAST(@ocupadosEspeciales AS FLOAT)/CAST(@totalEspeciales AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionEspeciales = -1;
	END CATCH;

	BEGIN TRY
		SELECT @relacionJefaturas = (CAST(@ocupadosJefaturas AS FLOAT)/CAST(@totalJefaturas AS FLOAT))*100
	END TRY
	BEGIN CATCH
		SELECT @relacionJefaturas = -1;
	END CATCH;

	BEGIN TRY
		SELECT @relacionVisitantes = (CAST(@ocupadosVisitantes AS FLOAT)/CAST(@totalVisitantes AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionVisitantes = -1;
	END CATCH;

	BEGIN TRY
		SELECT @relacionOficiales = (CAST(@ocupadosOficiales AS FLOAT)/CAST(@totalOficiales AS FLOAT))*100;
	END TRY
	BEGIN CATCH
		SELECT @relacionOficiales = -1;
	END CATCH;

	SELECT @relacionParticulares AS Particulares, @relacionEspeciales AS Especiales, @relacionJefaturas AS Jefaturas, @relacionVisitantes AS Visitantes, @relacionOficiales AS Oficiales FOR JSON PATH
	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_permisosUsuario]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_pintarEditarEstacionamiento]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_pintarEditarEstacionamiento]
	@estacionamientoId bigint
AS
	SELECT nombre, correo, telefono, direccionExacta, formaAcceso, descripcion, cantEspaciosEspeciales, cantEspaciosJefaturas, cantEspaciosVisitantes, cantEspacios, cantEspaciosOficiales, imageURL, tipoEstacionamiento
	FROM dbo.Estacionamientos e INNER JOIN dbo.Ubicaciones u ON e.ubicacion = u.ubicacionId WHERE estacionamientoId = @estacionamientoId FOR JSON PATH

	SELECT diaSemana, horaInicio, horaFinal FROM dbo.Horarios_Por_Estacionamiento he
	INNER JOIN dbo.Horarios h ON he.horarioId = h.horarioId
	INNER JOIN dbo.Dias d ON h.diaSemana = d.diaId
	WHERE estacionamientoId = @estacionamientoId FOR JSON PATH

	RETURN 1

GO
/****** Object:  StoredProcedure [dbo].[sp_pintarEditarUsuario]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_pintarEditarUsuario]
	@usuarioId bigint
AS
	SELECT correo, telefono, departamento = codigoDivision, notificarCorreoAlterno, usuarioId FROM dbo.Usuarios u
	INNER JOIN dbo.Divisiones d ON u.division = d.divisionId
	WHERE usuarioId = @usuarioId and deshabilitado=0 FOR JSON PATH

	SELECT placa FROM dbo.Vehiculos_Por_Usuario vu 
	INNER JOIN dbo.Vehiculos v ON vu.vehiculoId = v.vehiculoId
	WHERE usuarioId = @usuarioId AND vu.deshabilitado = 0 FOR JSON AUTO

	SELECT diaSemana, horaInicio, horaFinal FROM dbo.Horarios_Por_Usuario hu 
	INNER JOIN dbo.Horarios h ON hu.horarioId = h.horarioId
	INNER JOIN dbo.Dias d ON h.diaSemana = d.diaId
	WHERE usuarioId = @usuarioId AND hu.deshabilitado = 0 FOR JSON AUTO

	RETURN 1

GO
/****** Object:  StoredProcedure [dbo].[sp_registrarEstacionamiento]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_registrarEstacionamientoTotal]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_RegistrarFuncionario]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_registrarHorario]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_registrarHorarioEstacionamiento]    Script Date: 20/6/2022 19:52:31 ******/
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
/****** Object:  StoredProcedure [dbo].[sp_registrarUsuarioTotal]    Script Date: 20/6/2022 19:52:31 ******/
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
	@departamento nvarchar(50),
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


	-- division en caso de que no sirva

	DECLARE @departamentoFinal INT
	SELECT @departamentoFinal = division FROM dbo.Usuarios WHERE usuarioId = @nuevoUsuarioId

	IF @departamentoFinal IS NULL BEGIN
		UPDATE dbo.Usuarios SET division = 1 WHERE usuarioId= @nuevoUsuarioId
	END

	RETURN @nuevoUsuarioId -- Se completo exitosamente

GO
/****** Object:  StoredProcedure [dbo].[sp_registrarUsuarioTotalF2]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_registrarUsuarioTotalF2]
	@correoInstitucional nvarchar(200),
	@identificacion nvarchar(60),
	@correo nvarchar(200),
	@password nvarchar(200),
	@telefono nvarchar(40),
	@nombre nvarchar(60),
	@apellido1 nvarchar(60),
	@apellido2 nvarchar(60),
	@departamento nvarchar(50),
	@placa1 nvarchar(20),
	@placa2 nvarchar(20),
	@placa3 nvarchar(20),
	@placa4 nvarchar(20),
	@notificarCorreoAlterno bit,
	@esAdministrador bit,			-- nuevo
	@esJefatura bit,
	@esDiscapacitado bit,
	@esOperador bit
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

	-- *AHORA SE LLAMAN APARTE, LLAMANDO A:
	--	EXEC dbo.sp_registrarHorario @usuarioId, @dia, @horaEntrada, @horaSalida

	-- division en caso de que no sirva

	DECLARE @departamentoFinal INT
	SELECT @departamentoFinal = division FROM dbo.Usuarios WHERE usuarioId = @nuevoUsuarioId

	IF @departamentoFinal IS NULL BEGIN
		UPDATE dbo.Usuarios SET division = 1 WHERE usuarioId= @nuevoUsuarioId
	END


	-- Setea si es Administrador, Jefatura, Discapacitado, Operador								-- NUEVO
	IF @esAdministrador = 1 BEGIN
		UPDATE dbo.Usuarios SET esAdministrador = 1 WHERE usuarioId= @nuevoUsuarioId
	END

	IF @esJefatura = 1 BEGIN
		UPDATE dbo.Usuarios SET esJefatura = 1 WHERE usuarioId= @nuevoUsuarioId
	END

	IF @esDiscapacitado = 1 BEGIN
		UPDATE dbo.Usuarios SET esDiscapacitado = 1 WHERE usuarioId= @nuevoUsuarioId
	END

	IF @esOperador = 1 BEGIN
		UPDATE dbo.Usuarios SET esOperador = 1 WHERE usuarioId= @nuevoUsuarioId
	END																							-- NUEVO

	RETURN @nuevoUsuarioId -- Se completo exitosamente

GO
/****** Object:  StoredProcedure [dbo].[sp_RegistrarVehiculo]    Script Date: 20/6/2022 19:52:31 ******/
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

	-- NUEVO

	-- Validacion no mas de 4
	DECLARE @cantidadAsociados INT
	SELECT @cantidadAsociados = COUNT(vehiculoId) FROM dbo.Vehiculos_Por_Usuario WHERE usuarioId = @usuarioId AND deshabilitado = 0

	IF @cantidadAsociados>3 BEGIN
		RETURN 0					-- Ya el usuario agoto los 4 vehiculos que puede asociar
	END

	-- NUEVO

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
/****** Object:  StoredProcedure [dbo].[sp_ubicaciones]    Script Date: 20/6/2022 19:52:31 ******/
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
	INSERT INTO dbo.Ubicaciones (provincia, canton, distrito, direccionExacta) VALUES
	(@provincia, @canton, @distrito, @direccion)

	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[sp_verificacionDiaLaboral]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_verificacionDiaLaboral]
	@jefe bigint,
	@dia nvarchar(40)
AS

	-- Obtiene el dia de la semana de la reservacion
	DECLARE @diaSemanaAnalizando tinyint
	SELECT @diaSemanaAnalizando = diaId - 1 FROM dbo.Dias WHERE dia = @dia
	IF (@diaSemanaAnalizando = 0) 
	BEGIN 
		SET @diaSemanaAnalizando = 7
	END

	DECLARE @horariosCompatibles INT;

	-- Obtiene los horarios actuales del usuario, en el dia especifico

	WITH Horarios_CTE(diaSemana, horaInicio, horaFinal)
	AS
	(
		SELECT diaSemana, horaInicio, horaFinal FROM dbo.Horarios_Por_Usuario hu 
		INNER JOIN dbo.Horarios h ON hu.horarioId = h.horarioId
		WHERE usuarioId = @jefe AND hu.deshabilitado = 0 AND diaSemana = @diaSemanaAnalizando
	)

	
	SELECT @horariosCompatibles = COUNT(*) FROM Horarios_CTE

	IF (@horariosCompatibles < 1) BEGIN
		RETURN 0
	END ELSE BEGIN
		RETURN 1
	END
GO
/****** Object:  StoredProcedure [dbo].[sp_verificacionFranjas]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[sp_verificacionFranjas]
	@usuario bigint,
	@entrada datetime,
	@salida datetime
AS

	-- Obtiene el dia de la semana de la reservacion
	DECLARE @diaSemanaAnalizando tinyint
	SELECT @diaSemanaAnalizando = DATEPART(WEEKDAY, GETDATE())-1
	IF (@diaSemanaAnalizando = 0) 
	BEGIN 
		SET @diaSemanaAnalizando = 7
	END

	DECLARE @horariosCompatibles INT;

	-- Obtiene los horarios actuales del usuario, en el dia especifico

	WITH Horarios_CTE(diaSemana, horaInicio, horaFinal)
	AS
	(
		SELECT diaSemana, horaInicio, horaFinal FROM dbo.Horarios_Por_Usuario hu 
		INNER JOIN dbo.Horarios h ON hu.horarioId = h.horarioId
		WHERE usuarioId = @usuario AND hu.deshabilitado = 0 AND diaSemana = @diaSemanaAnalizando
	)

	
	SELECT @horariosCompatibles = COUNT(*) FROM Horarios_CTE WHERE  horaInicio <= CAST(@entrada AS TIME) AND horaFinal >= CAST(@salida AS TIME)

	IF (@horariosCompatibles < 1) BEGIN
		RETURN 0
	END ELSE BEGIN
		RETURN 1
	END
GO
/****** Object:  StoredProcedure [dbo].[verMisReservas]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[verMisReservas]
	@usuario BIGINT,
	@limiteA DATETIME,
	@limiteB DATETIME
AS
	SELECT r.reservacionId, r.horaInicio, r.horaFinal, r.tipoEspacioId, e.nombre, u.direccionExacta, e.telefono FROM dbo.Reservaciones r
	INNER JOIN dbo.Estacionamientos e ON r.estacionamientoId = e.estacionamientoId
	INNER JOIN dbo.Ubicaciones u ON e.ubicacion = u.ubicacionId
	WHERE r.usuarioId = @usuario AND r.horaInicio<=@limiteB AND r.horaFinal>=@limiteA   AND r.deshabilitado = 0 
	ORDER BY r.horaInicio, r.horaFinal FOR JSON PATH

	RETURN 1
GO
/****** Object:  StoredProcedure [dbo].[verReservasEstacionamiento]    Script Date: 20/6/2022 19:52:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[verReservasEstacionamiento]
	@estacionamiento BIGINT
AS
	SELECT r.reservacionId, r.horaInicio, r.horaFinal, r.tipoEspacioId, CONCAT(u.nombre, ' ', u.apellido1, ' ', u.apellido2) AS Usuario FROM dbo.Reservaciones r
	INNER JOIN dbo.Usuarios u ON r.usuarioId = u.usuarioId
	WHERE r.estacionamientoId = @estacionamiento AND r.deshabilitado = 0
	ORDER BY r.horaInicio, r.horaFinal FOR JSON PATH

	RETURN 1
GO
USE [master]
GO
ALTER DATABASE [parqueos] SET  READ_WRITE 
GO
